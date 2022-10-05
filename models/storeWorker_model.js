const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

StoreWorkerSchema = new mongoose.Schema({
    timestamp:Number,
    storeId:String,
    userId:String,
    monthlyPay:Number,
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const  StoreWorker = mongoose.model('storeWorker', StoreWorkerSchema);

function validatest_transaction(listNames){
    let schema=object().shape({
        storeId:string(),
        supplierId:string(),
        addedDate:number(),
        // prod:array(),
        
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.StoreWorker=StoreWorker;
exports.validatest_transaction=validatest_transaction;