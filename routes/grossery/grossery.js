const express = require("express");
const router = express.Router();
const {Grossery}=require("../../models/grossery_model")
router.get("/:id", async(req, res) => {
  const gtingNumb=req.params.id
  const listing=await Grossery.find({_id:gtingNumb }).catch(err=>{err});
  if (!listing) return res.status(404).send();
  // const resource = listingMapper(listing);
  res.send(listing);
});
router.get("/gting/:gting", async(req, res) => {
  const gtingNumb=req.params.gting
  const listing=await Grossery.find({Gting:gtingNumb }).catch(err=>{err});
  if (!listing) return res.status(404).send();
  // const resource = listingMapper(listing);
  res.send(listing);
});

module.exports = router;
