const mongoose = require("mongoose");
//import env variables
require("dotenv").config();
const mongoURI = process.env.db_url;

const Connect_to_MongoDB = async() => {

    try {
      await mongoose.connect(mongoURI);
      console.log("MongoDB Connected");
    } catch (error) {
      console.error(error);
    }
};
module.exports = Connect_to_MongoDB;