const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const  StoreListOrderSchema = new mongoose.Schema({
    listName:String,//required
    timestamp:Number,
    totalQuantity:Number,
    userId:String,
    unfinished:Number,
    totalPrice:Number,
    finished:Number,
    status:Boolean,

});

const  store_list_order = mongoose.model('store_list_order', StoreListOrderSchema);

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

exports.store_list_order=store_list_order;
exports.validateListNames=validateListNames;