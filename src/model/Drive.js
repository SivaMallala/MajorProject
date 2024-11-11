import mongoose from "mongoose";

const drive = new mongoose.Schema({
  companyname: { type: String,  require: true },
  companysite: { type: String },
  eligibulity:{type:String },
  syllabus:{type:String},
  date:{type:Date},
},
{timestamps:true});

const Drive = mongoose.models.Drive || mongoose.model("Drive", drive);

export default Drive;
