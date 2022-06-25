const jwt= require("jsonwebtoken")
const mongoose=require("mongoose")
const { exists } = require("../models/blogModel")
const blogModel=require("../models/blogModel")
let dToken

const authentication =function(req,res,next){
    try{
  let token = req.headers["X-Api-Key"];
    if (!token) token = req.headers["x-api-key"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    //  /try{
     dToken = jwt.verify(token, "project1-group10")
     if (!dToken){
      return res.status(400).send({ status: false, msg: "token is invalid" })}
     req.body.tokenId=dToken.authorId
      next();
    }
    // catch(error){
    //   return res.status(400).send({status:false,msg:"you are not an user"})
    // }
    
    catch(error)
    {
      res.status(500).send({msg:"Error",error:error.message})
    }
  }


  const Authorisation = async function (req, res, next) {
    try{
    let presentPrams = req.params
    if (!presentPrams) presentPrams = req.query
    if (!presentPrams) return res.status(400).send({ status: false, msg: "no input found" })
    if (presentPrams.blogId)
        if (!mongoose.isValidObjectId(presentPrams.blogId))
            return res.status(400).send({ status: false, msg: "invalid blogId" })
    if(presentPrams.authorId)        
    if (!mongoose.isValidObjectId(presentPrams.authorId))
        return res.status(400).send({ status: false, msg: "invalid authorId" })
        let authorId
        if(!presentPrams.blogId)
        {  authorId = await blogModel.findOne(presentPrams).select({ _id: 0, authorId: 1 })}
        else
        {authorId = await blogModel.findOne({_id:presentPrams.blogId}).select({ _id: 0, authorId: 1 })} 
   //change
    if (!authorId) return res.status(404).send({ status: false, msg: "give proper blog id" })
    
    if (dToken.authorId != authorId.authorId)
        return res.status(401).send({ status: false, msg: "unauthorised" })

    next()
}catch(err){
  res.status(500).send({msg:"server Error",err:err.message})
}
}

module.exports = { Authorisation,authentication }


  