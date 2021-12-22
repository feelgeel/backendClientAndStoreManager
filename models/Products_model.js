const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

ProductsSchema = new mongoose.Schema({
    productId:String,//required
    userId:String,
    listId:String,
    status:Boolean,
    addedDate:Number,
    product_type:String,
    checkedDate:Number,
    quantity:Number,
    modes:String,
    Gting:Number,
    image:String,
    brands:String,
    history:{},
    price:Number,
});
// _id:"fhkdsvh85vue",+
//     productId:"hfdtjksf484f"
//     listId:"hfyj815",
//     userId:"jvjds4855dvhyd"
//     quantity:5,
//     status:"true",
//     modes:"client",
const  Products = mongoose.model('Products', ProductsSchema);

function validateProducts(listNames){
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

exports.Products=Products;
exports.validateProducts=validateProducts;