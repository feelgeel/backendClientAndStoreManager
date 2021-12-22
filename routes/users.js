const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {User,validateUsers}=require("../models/user_model")
const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", async(req, res) => {
  let userBody=req.body;
  userBody.cash=0;
  userBody.store={isActive:false,sell:[],buy:[],storeName:""};
  userBody.client={isActive:true,lists:[],};
  userBody.manufacture={isActive:false,sell:[],buy:[],manufactureName:""};
  userBody.delivery={isActive:false,deliveries:[{from:"",to:"",}]};
  userBody.worker={isActive:false,};
  userBody.taxi={isActive:false,};
  userBody.receveur={isActive:false,};
  const respon=await validateUsers(userBody, { abortEarly: false }).catch(err=>err)  
  
    if(respon.errors) return res.status(400).send("something is wrong");
    const email_exist=await User.findOne({email:userBody.email}).catch(err=>{});
    if(email_exist) return res.status(400).header("Access-Control-Allow-Headers","Access-Control-Allow-Headers").send("user already exist");
    const userName_exist=await User.findOne({email:userBody.userName}).catch(err=>{});
    if(userName_exist) return res.status(400).header("Access-Control-Allow-Headers","Access-Control-Allow-Headers").send("userName already exist");

    // const salt=await bcrypt.genSalt(10).catch(err=>err);
    let newUser=new User(userBody);
    // newUser.password=await bcrypt.hash(newUser.password,salt).catch(err=>{});
    const user=await newUser.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const users=await User.find().catch(err=>{});
  res.send(users)
});
router.put("/update/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const users=await User.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(users)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const users=await User.findByIdAndRemove(id).catch(err=>{});
  res.send(users)
});
module.exports = router;
