const  mongoose = require('mongoose');

const {string,object, number}=require("yup");
const jwt=require("jsonwebtoken");

const  userSchema = new mongoose.Schema({
    firstName:String,//required
    userName:String,//required
    lastName:String,
    email:String,
    country:String,
    cash:Number,
    password:String,//required
    type:String,//required
    gender:String,
    image_front_url:String
 

});
userSchema.methods.generateAuthToken=function(){
	const token=jwt.sign( {
            userId:this._id,
            userName:this.userName,
            email:this.email,
            cash:0,
            type:"client"
            },"ciscoDabest");
	// console.log(token);
	return token
}


const  User = mongoose.model('user', userSchema);
// const  userDb = mongoose.model('categDb', grosseyCategSchema);

async function validateUsers(user){
    let schema=object().shape({
        firstName:string().min(5),
        lastName:string().min(3),
        userName:string().min(3),
        email:string().email(),
        country:string(),
        cash:number(),
        password:string(),
        type:string(),
    })
    const respon=await schema.validate(user, { abortEarly: false }).catch((err)=>{
        return {inner:err.inner[0].path};
    })
    return respon
    }
async function query_db(){

// const res=await Grossery.find({brands:"bimo"}).limit(5).catch((err)=>{err});
const res=await User.find().limit(5).catch((err)=>{err});

console.log(res);
}
// query_db()

exports.User=User;

exports.validateUsers=validateUsers;