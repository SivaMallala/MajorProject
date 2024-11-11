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
      const re = await Profile.findOne({email:mail});
      if(re.role == "admin"){
        const profile = await Profile.find();
        if (!profile) {
          return NextResponse.json({ message: "Profile not found" }, { status: 404 });
        }
        return NextResponse.json(profile, { status: 200 });
      }else{
        return NextResponse.json([], { status: 200 })
      }

      
    } catch (error) {
      console.error("Error fetching profile card:", error);
      return NextResponse.json({ message: "Failed to fetch profile card" }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }  
      await startDb();
      const { id,role } = await request.json();
      const profile = await Profile.findOne({_id:id});
      if (!profile) {
        return NextResponse.json({ message: "Profile not found" }, { status: 404 });
      }
      profile.role=role;
      await profile.save();
      return NextResponse.json(profile, { status: 200 });
    } catch (error) {
      console.error("Error fetching profile card:", error);
      return NextResponse.json({ message: "Failed to fetch profile card" }, { status: 500 });
    }
}     