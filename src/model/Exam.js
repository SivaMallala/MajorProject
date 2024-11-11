import mongoose from "mongoose";

const exam = new mongoose.Schema({
  gatestartDate: { type: String },
  gateendDate: { type: String },
  grestartDate:{type:String },
  greendDate:{type:String},
  catstartDate: { type: String },
  catendDate: { type: String },
  ieltsstartDate:{type:String },
  ieltsendDate:{type:String},
},
{timestamps:true});

const Exam = mongoose.models.Exam || mongoose.model("Exam", exam);

export default Exam;
