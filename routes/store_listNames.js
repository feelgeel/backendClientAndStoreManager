const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {store_ListNames,validateListNames}=require("../models/store_listNames_model")
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
    let newStorelistName=new store_ListNames(userBody);
    const user=await newStorelistName.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const store_listNames=await store_ListNames.find().catch(err=>{});
  res.send(store_listNames)
});
router.get("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const store_listNames=await store_ListNames.find({userId:id}).catch(err=>{});
  res.send(store_listNames)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const store_listNames=await store_ListNames.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(store_listNames)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const store_listNames=await store_ListNames.findByIdAndRemove(id).catch(err=>{});
  res.send(store_listNames)
});
// const genre=await Genre.findByIdAndUpdate(req.params.id,req.body,{new:true})
module.exports = router;
