const express = require("express");
const multer = require("multer");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const router = express.Router();

router.post("/login", multer().none(), async (req, res) => {
  try {
    const { mobilephone, password } = req.body;
    const user = await User.findOne({
      where: {
        mobilephone: mobilephone,
      },
    });
    if (!user) {
      res.sendStatus(200).json("cant find the phone number");
    }
    const passwordVerify = await bcrypt.compare(password, user.password);
    if (passwordVerify) {
       const access_token = jwt.sign({
         username : user.username,
         phonenumber : mobilephone,
         expiresIn: '24h'
       }, 
         process.env.SECRE_KEY
      )
       const refresh_token = jwt.sign({
         username : user.username,
         phonenumber : mobilephone,
         expiresIn: '30 days'
       }, 
         process.env.SECRE_KEY
       )
      return res.status(200).json({access_token, refresh_token});
    }else{
       return res.status(200).json('password incorrect!')
    }
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
      return res.status(200).json("email already exist!");
    }
    if (mobilephoneExist) {
      return res.status(200).json("mobilephone already exist!!");
    }

    bcrypt.hash(password, 10).then((hash) => {
      User.create({
        username,
        fullname,
        email,
        mobilephone,
        password: hash,
        createdAt,
        updatedAt,
      })
        .then(() =>
          res.status(201).json({ message: "register successfully!!" })
        )
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        });
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});

module.exports = router;
