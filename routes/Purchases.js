const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {Purchases}=require("../models/Purchases_model")
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
    let newPurchase=new Purchases(userBody);
    const purchase=await newPurchase.save().catch(err=>err);
  res.status(201).send(purchase)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const purchases=await Purchases.find().catch(err=>{});
  res.send(purchases)
});

module.exports = router;
