const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {SupplierWorker}=require("../models/supplierWorker_modal")
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
    let newproduct=new SupplierWorker(userBody);
    const product=await newproduct.save().catch(err=>err);
  res.status(201).send(product)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const Product=await SupplierWorker.find().limit(5).catch(err=>{});
  res.send(Product)
});
router.get("/:id", async(req, res) => {
  let id=req.params.id;
  const Product=await SupplierWorker.find({userId:id}).catch(err=>{});
  res.send(Product)
  console.log(Product)
  

});
router.get("/userId/:userId", async(req, res) => {
  let id=req.params.userId;
  const Product=await SupplierWorker.find({userId:id}).catch(err=>{});
  res.send(Product)
});
router.get("/gting/:gting", async(req, res) => {
  let id=req.params.gting;
  const Product=await SupplierWorker.find({Gting:id}).catch(err=>{});
  res.send(Product)
  console.log(id)
});

router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const Product=await SupplierWorker.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(Product)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const Product=await SupplierWorker.findByIdAndRemove(id).catch(err=>{});
  res.send(Product)
});
module.exports = router;
