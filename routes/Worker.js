const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {Worker}=require("../models/worker_model")
const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", async(req, res) => {
  let userBody=req.body;
// console.log(userBody);

  // const respon=await validateListNames(userBody, { abortEarly: false }).catch(err=>err)  
  
  //   if(respon.errors) return res.status(400).send("something is wrong");
    let newStorelistName=new Worker(userBody);
    const user=await newStorelistName.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const st_manual_order=await Worker.find().catch(err=>{});
  res.send(st_manual_order)
});
router.get("/:userId", async(req, res) => {
  const userId=req.params.userId;
  // console.log(userId)
  const st_manual_order=await Worker.find({userId}).catch(err=>{});
  res.send(st_manual_order)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const st_manual_order=await Worker.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(st_manual_order)
});
router.delete("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const st_listNames=await Worker.findByIdAndRemove(id).catch(err=>{});
  res.send(st_listNames)
});
// const genre=await Genre.findByIdAndUpdate(req.params.id,req.body,{new:true})
module.exports = router;
