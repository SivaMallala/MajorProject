import Profile from "@/model/Profile";
import Question from "@/model/Question";
import startDb from "@/utils/Database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function POST(request) {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }  
      const mail = session.user.email
      await startDb();
      const {question } = await request.json();
      const quest = await Question.create({
        question:question,
        askedby:mail
      })
      return NextResponse.json(quest, { status: 200 });
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
    const mail = session.user.email
    await startDb();
    const {id,answer} = await request.json();
    const quw = await Question.findById(id)
    quw.answer=answer;
    quw.solvedby=mail;
    await quw.save();
    return NextResponse.json(quw, { status: 200 });
  } catch (error) {
    console.error("Error fetching profile card:", error);
    return NextResponse.json({ message: "Failed to fetch profile card" }, { status: 500 });
  }
}



export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await startDb();

    // Fetch questions
    const quest = await Question.find();
    if (!quest || quest.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Collect 'askedby' and 'solvedby' emails and query matching profiles
    const askedbyArray = quest.map((question) => question.askedby);
    const solvedbyArray = quest
      .filter((question) => question.solvedby)
      .map((question) => question.solvedby);
    const emails = [...new Set([...askedbyArray, ...solvedbyArray])];

    const profiles = await Profile.find({ email: { $in: emails } }, 'email name number role');

    // Create a mapping of email to profile data for easy lookup
    const profileMap = {};
    profiles.forEach((profile) => {
      profileMap[profile.email] = { name: profile.name, number: profile.number, role: profile.role };
    });

    // Combine profile data into each question
    const combinedData = quest.map((question) => ({
      ...question.toObject(),
      name: profileMap[question.askedby]?.name || null,
      number: profileMap[question.askedby]?.number || null,
      role: profileMap[question.askedby]?.role || null,
      answeredby: question.solvedby ? profileMap[question.solvedby]?.name || null : null,
    }));
    return NextResponse.json(combinedData, { status: 200 });
  } catch (error) {
    console.error("Error fetching", error);
    return NextResponse.json({ message: "Failed to fetch" }, { status: 500 });
  }
}
