const express = require("express");
const router = express.Router();
const Joi = require("joi");
const DIR = './public/userImg';
 const {uuid} = require('uuidv4');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
      let fileType=""
      if(file.mimetype == "image/png"){
            fileType="png"
      } if(file.mimetype == "image/jpg"){
            fileType="jpg"
      } if(file.mimetype == "image/jpeg"){
            fileType="jpeg"
      }
        const fileName = file.originalname.toLowerCase().split(' ').join('-')+"."+fileType;
        cb(null,uuid()+"-"+fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" ||
         file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
const {User,validateUsers}=require("../models/user_model")
const schema = {
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", 
upload.single('images'),
  async(req, res) => {
    let userBody=req.body
    const url = req.protocol + '://' + req.get('host')
    const newUser = new User({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      product_name:req.body.product_name,
      userName:req.body.userName,
      email:req.body.email,
      password:req.body.password,
        image_front_url: url + '/public/userImg/' + req.file.filename,
    });
  // const respon=await validateUsers(userBody, { abortEarly: false }).catch(err=>err)  
  
    // if(respon.errors) return res.status(400).send("something is wrong");
    const email_exist=await User.findOne({email:userBody.email}).catch(err=>{});
    if(email_exist) return res.status(400).header("Access-Control-Allow-Headers","Access-Control-Allow-Headers").send("user already exist");
    const userName_exist=await User.findOne({email:userBody.userName}).catch(err=>{});
    if(userName_exist) return res.status(400).header("Access-Control-Allow-Headers","Access-Control-Allow-Headers").send("userName already exist");

    // const salt=await bcrypt.genSalt(10).catch(err=>err);
    // let newUser=new User(userBody);
    // newUser.password=await bcrypt.hash(newUser.password,salt).catch(err=>{});
    const user=await newUser.save().catch(err=>err);
  res.status(201).send(user)
  // console.log(userBody)
  });

router.get("/", async(req, res) => {
  const users=await User.find().catch(err=>{});
  res.send(users)
});
router.get("/:id", async(req, res) => {
  let id=req.params.id
  const users=await User.find({_id:id}).catch(err=>{});
  res.send(users)
});
router.put("/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const users=await User.findByIdAndUpdate(id,req.body,{new:true}).catch(err=>{});
  res.send(users)
});
router.delete("/remove/:id", async(req, res) => {
  const id=req.params.id;
  // console.log(userId)
  const users=await User.findByIdAndRemove(id).catch(err=>{});
  res.send(users)
});
module.exports = router;
