const mongoose=require("mongoose");
const URI =require("../config/db.config");
const db={}

db.mongoose=mongoose;
db.URI=URI;
module.exports=db;
