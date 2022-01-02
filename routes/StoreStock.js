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
    let newStoreStock=new storeStock(userBody);
    const st_stock=await newStoreStock.save().catch(err=>err);
  res.status(201).send(st_stock)
  console.log(userBody)
  });

router.get("/", async(req, res) => {
  const st=await storeStock.find().catch(err=>{});
  res.send(st)
});
router.get("/:storeId/:gting/:productId", async(req, res) => {
  let storeId=req.params.storeId;
  let Gting=req.params.gting;
  let productId=req.params.productId;
  const st=await storeStock.find({storeId,Gting,productId}).catch(err=>{});
  res.send(st)
  console.log("storeId",storeId)
  console.log("gting",Gting)
  console.log("prodid",productId)
});


module.exports = router;
