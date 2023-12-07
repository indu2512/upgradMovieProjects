const mongoose=require("mongoose")
const genreSchema=mongoose.Schema({genreid: Number, genre: String})
const GENRE=mongoose.model("genres",genreSchema);
module.exports=GENRE