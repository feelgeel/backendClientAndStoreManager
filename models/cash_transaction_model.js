const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

cash_transactionSchema = new mongoose.Schema({
    from:String,
    to:String,
    cash:Number,
    timeStamp:Number,
    transactionId:String,
    status:Boolean,
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const  cash_transaction = mongoose.model('cash_transaction', cash_transactionSchema);

function validatest_transaction(listNames){
    let schema=object().shape({
        productId:string(),
        userId:string(),
        listId:string(),
        status:boolean(),
        addedDate:number(),
        checkedDate:number(),
         product_type:string(),
        boughtDate:number(),
        quantity:number(),
        modes:string(),
        Gting:number(),
        image:string(),
        brands:string(),
        price:number(),
        
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.cash_transaction=cash_transaction;
exports.validatest_transaction=validatest_transaction;