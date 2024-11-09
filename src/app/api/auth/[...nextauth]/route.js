import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import startDb from "@/utils/Database";
import User from "@/model/User";
import Profile from "@/model/Profile";

// Your NextAuth configuration
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
          const userexist = await User.findOne({ email: profile.email });

          if (!userexist) {
            await User.create({
              email: profile.email,
              name: profile.name,
              picture: profile.picture,
            });
            await Profile.create({
                email: profile.email,
              name: profile.name,
            })
          } else {
            console.log("User already exists");
          }
          return true;
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
