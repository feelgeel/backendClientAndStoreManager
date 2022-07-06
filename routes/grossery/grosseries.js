const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../../store/listings");
const categoriesStore = require("../../store/categories");
const validateWith = require("../../middleware/validation");
const imageResize = require("../../middleware/imageResize");
const config = require("config");
const {Grossery,CategDb}=require("../../models/grossery_model")
const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(1),
  categoryId: Joi.number().required().min(1),
  location: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  }).optional(),
};

const validateCategoryId = (req, res, next) => {
  if (!categoriesStore.getCategory(parseInt(req.body.categoryId)))
    return res.status(400).send({ error: "Invalid categoryId." });

  next();
};
// findByIdAndUpdate
// findByIdAndRemove
router.get("/", async(req, res) => {
  const listings=await Grossery.find().catch(err=>{err});
  res.send(listings);
});
router.get("/categories", async(req, res) => {
  const listings=await CategDb.find().catch(err=>{err});
  res.send(listings);
});
router.get("/:name", async(req, res) => {
  const categName=req.params.name;
  const listings=await Grossery.find({categ:categName}).catch(err=>{err});
  res.send(listings);
});
router.get("/:id", async(req, res) => {
  const _id=req.params.id;
  const listings=await Grossery.find({_id}).catch(err=>{err});
  res.send(listings);
});


router.post(
  "/",
  [
    // Order of these middleware matters.
    // "upload" should come before other "validate" because we have to handle
    // multi-part form data. Once the upload middleware from multer applied,
    // request.body will be populated and we can validate it. This means
    // if the request is invalid, we'll end up with one or more image files
    // stored in the uploads folder. We'll need to clean up this folder
    // using a separate process.
    // auth,
    upload.array("images", config.get("maxImageCount")),
    validateWith(schema),
    validateCategoryId,
    imageResize,
  ],

  async (req, res) => {
    const listing = {
      title: req.body.title,
      price: parseFloat(req.body.price),
      categoryId: parseInt(req.body.categoryId),
      description: req.body.description,
    };
    listing.images = req.images.map((fileName) => ({ fileName: fileName }));
    if (req.body.location) listing.location = JSON.parse(req.body.location);
    if (req.user) listing.userId = req.user.userId;

    store.addListing(listing);

    res.status(201).send(listing);
  }
);

module.exports = router;
