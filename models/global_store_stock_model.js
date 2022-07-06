const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const globalStoreStockSchema = new mongoose.Schema({
     productId:String,//required
    userId:String,
    quantity:Number,
    image_front_url:String,
    Gting:Number,
    
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const globalStoreStock= mongoose.model('globalStoreStock', globalStoreStockSchema);

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

exports.globalStoreStock=globalStoreStock;
exports.validatestoreStock=validatestoreStock;