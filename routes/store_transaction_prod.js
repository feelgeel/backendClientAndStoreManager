const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {st_transaction}=require("../models/store_transaction_prod_model")
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
    let newTransaction=new st_transaction(userBody);
    const store_Trans=await newTransaction.save().catch(err=>err);
  res.status(201).send(store_Trans)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const store_Trans=await st_transaction.find().catch(err=>{});
  res.send(store_Trans)
});
router.get("/:id", async(req, res) => {
  let id=req.params.id
  const store_Trans=await st_transaction.find({transactionId:id}).catch(err=>{});
  res.send(store_Trans)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(req.body)
  const Product=await st_transaction.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  
  res.send(Product)
});


module.exports = router;
