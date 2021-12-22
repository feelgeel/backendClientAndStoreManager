const express = require("express");
const router = express.Router();
const Joi = require("joi");
// const bcrypt= require('bcrypt');
// const _= require('lodash');

const {storeStock}=require("../models/store_stock_model")
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
    // let newStoreStock=new StoreStock(userBody);
    // const storeStock=await StoreStock.save().catch(err=>err);
  // res.status(201).send(storeStock)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const st=await storeStock.find().catch(err=>{});
  res.send(st)
});
router.get("/:userId/:gting", async(req, res) => {
  let userId=req.params.userId;
  let gting=req.params.gting;
  const st=await storeStock.find({userId,Gting:gting}).catch(err=>{});
  res.send(st)
  console.log(userId)
  console.log(gting)
});


module.exports = router;
