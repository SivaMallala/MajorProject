import mongoose from "mongoose";

const profile = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  name: { type: String, required: true },
  role:{type:String,required:true , default:"student"},
  rollno:{type:String,default:"0"},
  department:{type:String,default:"0"},
  year:{type:String,default:"0"},
},
{timestamps:true});

const Profile = mongoose.models.Profile || mongoose.model("Profile", profile);

export default Profile;
