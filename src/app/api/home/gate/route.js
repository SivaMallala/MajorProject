import Exam from "@/model/Exam";
import startDb from "@/utils/Database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function PUT(request) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  
    await startDb();
    const { gatestartDate, gateendDate } = await request.json();
  
    let update = await Exam.findOne();
    
    if (update) {
      update.gatestartDate = gatestartDate;
      update.gateendDate = gateendDate;
      await update.save();
      return NextResponse.json({ message: "Update successful" }, { status: 200 });
    } else {
      await Exam.create({ gatestartDate, gateendDate });
      return NextResponse.json({ message: "New entry created successfully" }, { status: 201 });
    }
  }

  export async function GET() {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
  
      await startDb();
    const examData = await Exam.find();
      if (!examData) {
        return NextResponse.json([], { status: 200 });
      }
      return NextResponse.json(examData, { status: 200 });
    } catch (error) {
      console.error("Error fetching", error);
      return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
    }
  }       