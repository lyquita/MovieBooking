const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/user");

router.get("/all", (req, res) => {
  try {
    return res.send("all!!");
  } catch (err) {
    return res.send(err);
  }
});

router.post("/signup", multer().none(), async (req, res) => {
  try {
    const {
      username,
      fullname,
      email,
      mobilephone,
      password,
      createdAt,
      updatedAt,
    } = req.body;
    console.log(req.body);
    const emailExist = await User.findOne({
      where: {
        email: email,
      },
    });
    const mobilephoneExist = await User.findOne({
      where: {
        mobilephone: mobilephone,
      },
    });
    if (emailExist) {
      return res.status(400).json("email already exist!");
    }
    if (mobilephoneExist) {
      return res.status(400).json("mobilephone already exist!!");
    }
    User.create({
      username,
      fullname,
      email,
      mobilephone,
      password,
      createdAt,
      updatedAt,
    })
      .then(() => res.status(201).json({ message: "register successfully!!" }))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  } catch (err) {
    console.log(err);
    process.exit;
  }
});

module.exports = router;
