<<<<<<< HEAD
// models/profile.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

  name: {
    type: String,
    maxlength: 500// Store the URL of the uploaded image
  },
  descripition: {
    type: String,
    maxlength: 500
  }

});

module.exports = mongoose.model('Category', categorySchema);
module.exports= cat
=======
const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Category description is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
>>>>>>> 600ed317b002dcb513a2acee481ac989ca266944
