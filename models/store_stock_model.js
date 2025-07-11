const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const storeStockSchema = new mongoose.Schema({
    productId:String,//required
    userId:String,
    quantity:Number,
    image_front_url:String,
    // newByuPrice:Number,
    // oldByuPrice:Number,
    ByuPrice:Number,
    sellPrice:Number,
    Gting:Number,
    Benefit:Number,
     stockAlert:String,
    listType:String,
     listId:String,
    perimationDate:String,
    perimationAlert:Number,
    priority:Boolean,
});
const storeStock= mongoose.model('storeStock', storeStockSchema);

function validatestoreStock(listNames){
    let schema=object().shape({
        productId:string(),
        userId:string(),
        quantity:number(),
        sellPrice:number(),
        newByuPrice:number(),
        oldByuPrice:number(),
        Gting:number(),
        
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.storeStock=storeStock;
exports.validatestoreStock=validatestoreStock;