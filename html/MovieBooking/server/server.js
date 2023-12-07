const express = require("express")
const db=require("./model/index")
require("dotenv").config()
const app=express()
const port=process.env.PORT || 3001
require("./routes/user.routes")(express,app)
//db connection

db.mongoose
  .connect(db.URI)
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
  });
app.get("/movies",(req,res)=>{
    res.status(200).send("All Movies Data in JSON format from Mongo DB");
})
app.get("/genres",(req,res)=>{
   res.status(200).send("All Genres Data in JSON format from Mongo DB") ;
})
app.get("/artists",(req,res)=>{
    res.status(200).send("All Artists Data in JSON format from Mongo DB");
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);

})
