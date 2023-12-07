const mongoose=require("mongoose")
const movieSchema=mongoose.Schema({
    movieid:Number,
    title:String,
    published:Boolean,
    released: Boolean,
    poster_url:String,
    release_date:String,
    publish_date: String,
    artists:[
       {artistid: Number, first_name: String, last_name: String, wiki_url:String, 
        profile_url:String,
         movies:[]},
      
    ],
    genres:{
        type:String,
        enum:["comedy","drama","action","romance","horror"]},
    duration: Number,
    critic_rating: Number,
    trailer_url:String,
    wiki_url:String,
    story_line: String,
    shows: [
       {
          id: Number,
          theatre:{name: String, city:String},
          language:String,
          show_timing:String,
          available_seats:String,
          unit_price: Number
       }
    ]
 })
 const MOVIE=mongoose.model.apply("movies",movieSchema);
 module.exports=MOVIE