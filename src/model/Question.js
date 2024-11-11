import mongoose from "mongoose";

const quest = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
  askedby:{type:String },
  solvedby:{type:String},
},
{timestamps:true});

const Question = mongoose.models.Question || mongoose.model("Question", quest);

export default Question;
