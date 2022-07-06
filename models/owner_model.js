const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

OwnerSchema = new mongoose.Schema({
    timestamp:Number,
    userId:String,
    storeId:String,
});
const  Owner = mongoose.model('Owner', OwnerSchema);

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

exports.Owner=Owner;
exports.validatest_transaction=validatest_transaction;