const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {Byu}=require("../models/byu_model")
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
    let newproduct=new Byu(userBody);
    const product=await newproduct.save().catch(err=>err);
  res.status(201).send(product)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const Product=await Byu.find().catch(err=>{});
  res.send(Product)
});
// router.get("/:id", async(req, res) => {
//   let id=req.params.id;
//   const Product=await Byu.find({listId:id}).catch(err=>{});
//   res.send(Product)
// });
// router.get("/userId/:userId", async(req, res) => {
//   let id=req.params.userId;
//   const Product=await Byu.find({userId:id}).catch(err=>{});
//   res.send(Product)
// });
// router.put("/:id", async(req, res) => {
//   const id=req.params.id;
//   // console.log(userId)
//   const Product=await Byu.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
//   res.send(Product)
// });
// router.delete("/remove/:id", async(req, res) => {
//   const id=req.params.id;
//   // console.log(userId)
//   const Product=await Byu.findByIdAndRemove(id).catch(err=>{});
//   res.send(Product)
// });
module.exports = router;
