const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const  PurchasesSchema = new mongoose.Schema({
    listName:String,//required
    timestamp:Number,
    quantity:Number,
    userId:String,

});

const  Purchases = mongoose.model('Purcheses', PurchasesSchema);

function validateListNames(listNames){
    let schema=object().shape({
        listName:string(),
        timestamp:string(),
        quantity:number(),
        userId:string(),
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.Purchases=Purchases;
exports.validateListNames=validateListNames;