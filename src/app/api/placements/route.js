import Drive from "@/model/Drive";
import startDb from "@/utils/Database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


  export async function PUT(request) {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }  
    const { companyName,companysite,eligibilityCriteria,Syllabus,driveDate } = await request.json();
    await startDb();
    const newdrive = await Drive.create({
        companyname:companyName,
        companysite:companysite,
        eligibulity:eligibilityCriteria,
        syllabus:Syllabus,
        date:driveDate,
      });
  
      return NextResponse.json({ message: " successfully" }, { status: 200 });
  }

  export async function DELETE(request) {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
  
      const { id } = await request.json();
      await startDb();
  
      const removedDrive = await Drive.findByIdAndDelete(id);
      
      if (!removedDrive) {
        return NextResponse.json({ message: "Drive not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Drive successfully removed" }, { status: 200 });
    } catch (error) {
      console.error("Error deleting drive:", error);
      return NextResponse.json({ message: "Failed to delete drive" }, { status: 500 });
    }
  }
  export async function GET() {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
  
      await startDb();
      const today = new Date();
    today.setHours(0, 0, 0, 0);
    const drive = await Drive.find({ date: { $gte: today } });
      if (!drive) {
        return NextResponse.json({ message: "not found" }, { status: 404 });
      }
      return NextResponse.json(drive, { status: 200 });
    } catch (error) {
      console.error("Error fetching", error);
      return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
    }
  }     