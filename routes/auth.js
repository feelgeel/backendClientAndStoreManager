const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const {User,validateUsers}=require("../models/user_model")
const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", validateWith(schema),async(req, res) => {
  const { email, password } = req.body;
  const user =await User.findOne({email:email}).catch(err=>err)
  if (!user || user.password !== password)
    return res.status(400).send({ error: "Invalid email or password." });

  const token = jwt.sign(
    { userId: user.id, email:user.email,userName:user.userName,type:user.type,cash:user.cash},
    "ciscoDabest"
  );
  // res.send(JSON.stringify(token));
  res.send(token)

});


module.exports = router;
