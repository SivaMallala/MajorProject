import Profile from "@/model/Profile";
import startDb from "@/utils/Database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
      
      const mail = session.user.email
      await startDb();
      const profile = await Profile.findOne({email:mail});
      if (!profile) {
        return NextResponse.json({ message: "Profile not found" }, { status: 404 });
      }
      const rolee = profile.role
      return NextResponse.json(rolee, { status: 200 });
    } catch (error) {
      console.error("Error fetching profile card:", error);
      return NextResponse.json({ message: "Failed to fetch profile card" }, { status: 500 });
    }
}