const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

sell_productsSchema = new mongoose.Schema({
    timestamp:Number,
    Gting:Number,
    userId:String,
    productId:String,
     listId:String,
    quantity:Number,
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const  sell_products = mongoose.model('sell_products', sell_productsSchema);

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

exports.sell_products=sell_products;
exports.validatest_transaction=validatest_transaction;