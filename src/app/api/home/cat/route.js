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
    const { catstartDate,catendDate } = await request.json();
    
    let update = await Exam.findOne();
    
    if (update) {
      update.catstartDate = catstartDate;
      update.catendDate = catendDate;
      await update.save();
      return NextResponse.json({ message: "Update successful" }, { status: 200 });
    } else {
      await Exam.create({ catstartDate, catendDate });
      return NextResponse.json({ message: "New entry created successfully" }, { status: 201 });
    }
  }