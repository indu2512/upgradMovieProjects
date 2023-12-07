const mongoose=require("mongoose")
const artistSchema=mongoose.Schema({artistid: Number, first_name: String, last_name: String, 
wiki_url:String, profile_url:String, movies:[]})
const ARTIST=mongoose.model("artists",artistSchema);
module.exports=ARTIST