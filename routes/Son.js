const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {Son}=require("../models/son_model")
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
    let SonDb=new Son(userBody);
    const user=await SonDb.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const st_manual_order=await Son.find().catch(err=>{});
  res.send(st_manual_order)
});
router.get("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const st_manual_order=await Son.find({userId:id}).catch(err=>{});
  res.send(st_manual_order)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const st_manual_order=await Son.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(st_manual_order)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const st_listNames=await store_ListNames.findByIdAndRemove(id).catch(err=>{});
  res.send(st_listNames)
});
// const genre=await Genre.findByIdAndUpdate(req.params.id,req.body,{new:true})
module.exports = router;
