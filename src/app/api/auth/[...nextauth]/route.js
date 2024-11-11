import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import startDb from "@/utils/Database";
import User from "@/model/User";
import Profile from "@/model/Profile";

// NextAuth configuration
export const authOptions = {
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await startDb();

          // Check if the user already exists
          const userExist = await User.findOne({ email: profile.email });

          if (!userExist) {
            // Create both User and Profile simultaneously if the user does not exist
            const [newUser, newProfile] = await Promise.all([
              User.create({
                email: profile.email,
                name: profile.name,
                picture: profile.picture,
              }),
              Profile.create({
                email: profile.email,
                name: profile.name,
              }),
            ]);

            console.log("User and Profile created:", newUser, newProfile);
          } else {
            console.log("User already exists, logging in:", userExist);
          }

          return true; // Allow sign-in if user exists or was created
        } catch (error) {
          console.error("Sign-in error:", error);
          return false;
        }
      }
    },
    async session({ session, token }) {
      await startDb();
      const user = await User.findOne({ email: session.user.email });
      return {
        ...session,
        user,
      };
    },
  },
};

// Handler for NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
