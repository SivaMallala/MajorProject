import Profile from "@/model/Profile";
import startDb from "@/utils/Database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


  export async function PUT(request) {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const mail = session.user.email;
  
    const { fullName, rollNumber, department, year } = await request.json();
    await startDb();
  
    const existingProfile = await Profile.findOne({email:mail  });
  
    if (existingProfile) {
      
      existingProfile.name = fullName;
      existingProfile. rollno =  rollNumber;
      existingProfile.department= department;
      existingProfile.year = year;
  
      await existingProfile.save();
  
      return NextResponse.json({ message: "Profile updated successfully" }, { status: 200 });
    } else {

  console.log("no profile")
      return NextResponse.json({ message: "no profile" }, { status: 201 });
    }
  }
  

  export async function GET() {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
  
      const userEmail = session.user.email;
  
      await startDb();
      const profile = await Profile.findOne({ email: userEmail });
      if (!profile) {
        return NextResponse.json([], { status: 200 });
      }
      return NextResponse.json(profile, { status: 200 });
    } catch (error) {
      console.error("Error fetching profile card:", error);
      return NextResponse.json({ message: "Failed to fetch profile card" }, { status: 500 });
    }
  }     