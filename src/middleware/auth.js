const jwt= require("jsonwebtoken")
var dToken

const authentication =function(req,res,next){
    try{
  let token = req.headers["X-Auth-Key"];
    if (!token) token = req.headers["x-auth-key"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
    console.log(token);
  
  
     dToken = jwt.verify(token, "project1-group10");
    if (!dToken){
      return res.status(400).send({ status: false, msg: "token is invalid" })}
      
      
      next();
    }
  
    catch(error)
    {
      res.status(500).send({msg:"Error",error:error.message})
    }
  }


  module.exports.authentication=authentication