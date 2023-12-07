const login=(req,res)=>{
  const {username,password}=req.body;
  if(username=== "abbb" && password === "123"){
    res.status(200).json({success:true})
  }

}
module.exports=[login]