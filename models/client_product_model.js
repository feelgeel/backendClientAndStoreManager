const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const  ClientProductSchema = new mongoose.Schema({
     timestamp:Number,
    Gting:Number,
    userId:String,
    productId:String,
    listId:String,
    image_front_url:String,
    brands:String,
    quantity:Number,
    price:Number,
    status:Boolean,

});

const  client_products = mongoose.model('client_product', ClientProductSchema);

function validateListNames(listNames){
    let schema=object().shape({
        listName:string(),
        timestamp:string(),
        totalQuantity:number(),
        userId:string(),
         unfinished:number(),
         finished:number(),
         status:boolean()
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.client_products=client_products;
exports.validateListNames=validateListNames;