const mongoose = require("mongoose");
//destructure schema using mongoose
const { Schema } = mongoose;
const schema = mongoose.Schema();

const userProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const UserProfile = mongoose.model("UserProfile",userProfileSchema);   
module.exports = UserProfile;