const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

st_transactionSchema = new mongoose.Schema({
    clientId:String,
    supplierId:String,
    timeStamp:Number,
    listId:String,
    status:String,
    paymentMethode:String,
    ticket:Number,
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const  st_transaction = mongoose.model('storeTransaction', st_transactionSchema);

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

exports.st_transaction=st_transaction;
exports.validatest_transaction=validatest_transaction;