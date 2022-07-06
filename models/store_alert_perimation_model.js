const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const  perimationAlertSchema= new mongoose.Schema({
    productId:String,//required
    Gting:Number,
    userId:String,
    quantity:Number,
    image_front_url:String,
    perimationDate:Number,
});

const perimationAlert = mongoose.model('perimationAlert ', perimationAlertSchema);

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

exports.perimationAlert=perimationAlert;
exports.validatestoreStock=validatestoreStock;