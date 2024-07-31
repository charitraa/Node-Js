<<<<<<< HEAD
const { model } = require("mongoose");
const Category = require("../models/categoryModel");

const registerCategory = async (req, res) => {
  const { name, description } = req.body;
  // const userEmail = req.body.email;

  try {
    let category = await Category.findOne({ name });

    if (category) {
      return res.status(400).json({ msg: "Category already exists" });
    }

    category = new Category({
      name: name,
      description: description
    });

    await category.save();
    res.status(201).json({ msg: "Category created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ msg: error.message });
  }
};

module.exports = {
  registerCategory
};
=======
const Category = require("../models/categoryModel");

//  controller for adding a category
const addCategory = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  //  check if category already exists
  try {
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ msg: "Category already exists" });
    }
    const category = new Category({
      name,
      description,
    });
    await category.save();
    return res
      .status(201)
      .json({ msg: "Category added successfully", category: category });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for getting all categories

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res
      .status(200)
      .json({ msg: "category fetched successfully", categories });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for getting a single category

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    return res
      .status(200)
      .json({ msg: "Category fetched successfully", category });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for updating a category

const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await Category.findOne({ _id: req.params.id });
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    if (!name) {
      category.description = description;
    } else if (!description) {
      category.name = name;
    } else {
      category.name = name;
      category.description = description;
    }

    await category.save();
    return res
      .status(200)
      .json({ msg: "Category updated successfully", category });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for deleting a category

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }
    return res.status(200).json({ msg: "Category deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
>>>>>>> 600ed317b002dcb513a2acee481ac989ca266944
