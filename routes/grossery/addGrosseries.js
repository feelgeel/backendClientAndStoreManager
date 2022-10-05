const express = require("express");
const router = express.Router();
const {AddGrossery}=require("../../models/addGrossery_model")
const multer = require("multer");
const config = require("config");
const imageResize = require("../../middleware/imageResize");
 const {uuid} = require('uuidv4');
const DIR = './public/grosseryImg';
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
router.post(
  "/",
  upload.single('images')
  ,

  async (req, res) => {
      const url = req.protocol + '://' + req.get('host')
    const newUser = new AddGrossery({
      Gting:req.body.Gting,
      product_name:req.body.product_name,
      brand:req.body.brand,
      categ:req.body.categ,
      main_categ:req.body.main_categ,
        image_front_url: url + '/public/grosseryImg/' + req.file.filename,
    });

       const user=await newUser.save().catch(err=>err);
  res.status(201).send(user)
  }
);

module.exports = router;
