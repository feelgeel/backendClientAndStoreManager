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
  // console.log("body",userBody)
  // console.log("db",st_stock)
  });

router.get("/", async(req, res) => {
  const st=await storeStock.find().catch(err=>{});
  res.send(st)
});
router.get("/:userId", async(req, res) => {
  let userId=req.params.userId
  const st=await storeStock.find({userId,priority:true}).catch(err=>{});
  res.send(st)
  // console.log(userId)
});
router.get("/productId/:userId/:productId", async(req, res) => {
  let productId=req.params.productId
  let userId=req.params.userId
  const st=await storeStock.find({userId,productId}).catch(err=>{});
  res.send(st)
  // console.log(req.params)
});
router.get("/id/:userId/:_id", async(req, res) => {
  let _id=req.params._id
  let userId=req.params.userId
  const st=await storeStock.find({userId,_id}).catch(err=>{});
  res.send(st)
  // console.log(req.params)
});
router.get("/:userId/:gting/:productId", async(req, res) => {
  let userId=req.params.userId;
  let Gting=req.params.gting;
  let productId=req.params.productId;
  const st=await storeStock.find({userId,Gting,productId}).catch(err=>{});
  res.send(st)
  // console.log("userId",userId)
  // console.log("gting",Gting)
  // console.log("prodid",productId)
});
router.get("/:userId/:gting", async(req, res) => {
  let userId=req.params.userId;
  let Gting=req.params.gting;
  const st=await storeStock.find({userId,Gting}).catch(err=>{});
  res.send(st)
  // console.log("userId",userId)
  // console.log("gting",Gting)
  // console.log("prodid",productId)
});
router.get("/manual_order/:userId/:listId/:productId", async(req, res) => {
  let userId=req.params.userId;
  let listId=req.params.listId;
  let productId=req.params.productId;
  const st=await storeStock.find({userId,listId,productId,
    listType:"manual order"}).catch(err=>{});
  res.send(st)
  // console.log("userId",userId)
  // console.log("gting",Gting)
  // console.log("prodid",productId)
});
router.put("/:id", async(req, res) => {
const id=req.params.id;
const st_stock=await storeStock.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
res.send(st_stock)
// console.log(req.body)
});
router.delete("/:id", async(req, res) => {
const id=req.params.id;
const st_stock=await storeStock.findByIdAndRemove(id).catch(err=>{});
res.send(st_stock)
});

module.exports = router;
