const  mongoose = require('mongoose');

const {string,object, number}=require("yup");

const  grosserySchema = new mongoose.Schema({
    Gting:String,//required
    country_key:String,
    company_prefix:String,
    country_db:String,
    product_type:String,//required
    brands_tags:{},
    packaging:{},
    countries:{},//try to make it samrt so we detect the country we compare and then add the product
    brands:String,//required get all the brands and the company prefix 
    purchase_places:{},
    manufacturing_places_tags:{},
    manufacturing_places:{},
    image_front_small_url:String,
    labels:{},
    product_name:String,//required
    generic_name:String,
    main_category:{},
    categories:{},//must loop throw them and organise
    categories_tags:{},
    image_front_url:String,
    image_url:String,
    image_small_url:String,
    codebar_type:{},
    main_categ:String,
    categ:String,

});
const  grosseyCategSchema = new mongoose.Schema({
    name:String,
    main_categ:String,

});

const  Grossery = mongoose.model('grossery', grosserySchema);
const  CategDb = mongoose.model('categDb', grosseyCategSchema);

function validateGrossery(grossery){
    let schema=object().shape({
        name:string().min(5),
        age:number().min(3),
    })
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await CategDb.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.Grossery=Grossery;
exports.CategDb=CategDb;
exports.validateGrossery=validateGrossery;