import mongoose from "mongoose";

const profile = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  name: { type: String, required: true },
  role:{type:String,required:true , default:"student"},
  rollno:{type:String,unique: true,},
  department:{type:String},
  year:{type:String},
},
{timestamps:true});

const Profile = mongoose.models.Profile || mongoose.model("Profile", profile);

export default Profile;
