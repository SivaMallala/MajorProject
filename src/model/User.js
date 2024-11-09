import mongoose from "mongoose";

const user = new mongoose.Schema({
  email: { type: String, unique: true, require: true },
  name: { type: String, required: true },
  picture: { type: String, },
},
{timestamps:true});

const User = mongoose.models.User || mongoose.model("User", user);

export default User;
