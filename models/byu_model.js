const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

ByuSchema = new mongoose.Schema({
    productId:String,//required
    userId:String,
    listId:String,
    buyDate:Number,
    quantity:Number,
    Gting:Number,
    image:String,
    brands:String,
    price:Number,
});
// _id:"fhkdsvh85vue",
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const Byu= mongoose.model('Byu', ByuSchema);

function validateByu(listNames){
    let schema=object().shape({
        productId:string(),
        userId:string(),
        listId:string(),
        buyDate:number(),
        quantity:number(),
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

exports.Byu=Byu;
exports.validateByu=validateByu;