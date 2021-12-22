const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {ListNames,validateListNames}=require("../models/listNames_model")
const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", async(req, res) => {
  let userBody=req.body;
console.log(userBody);

  // const respon=await validateListNames(userBody, { abortEarly: false }).catch(err=>err)  
  
  //   if(respon.errors) return res.status(400).send("something is wrong");
    let newlistName=new ListNames(userBody);
    const user=await newlistName.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const listNames=await ListNames.find().catch(err=>{});
  res.send(listNames)
});
router.get("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const listNames=await ListNames.find({userId:id}).catch(err=>{});
  res.send(listNames)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const listNames=await ListNames.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(listNames)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const listNames=await ListNames.findByIdAndRemove(id).catch(err=>{});
  res.send(listNames)
});
// const genre=await Genre.findByIdAndUpdate(req.params.id,req.body,{new:true})
module.exports = router;
