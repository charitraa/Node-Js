const express = require("express");
const router = express.Router();
import UserProfile from "../Model/userProfile";

const UserProfile = (req, res) => {
  // const {name, email} = req.body;
  const data = req.body;
  const name = data.name;
  const email = data.email;
  const contact = data.contact;
  const address = data.address;

  const newUserProfile = new UserProfile({ name, email, contact, address });
  newUserProfile
    .save()
    .then((data) => {
      res
        .status(200)
        .json({ message: "User profile added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error occured", err });
    });
};