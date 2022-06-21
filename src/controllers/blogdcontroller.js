const authorModel= require("../models/authorModel")
const blogModel=require("../models/blogModel")

 const createAuthor= async function(req,res){
   
 }

 const createBlog=async function(req,res){
   
 }

 const getBlog=async function(req,res){
   
}
const updateBlog=async function(req,res){
   
}

const deleteBlogById=async function(req,res){
   try{
   let blogid=req.params.blogId
   let findId= await blogModel.findOne({_id:blogid}).select({_id:1})
   if(findId===null){
      res.status(404).send({status: false, msg: ""})}
      else{
         let updateDelete= await blogModel.findOneAndUpdate({_id:findId._id},{$set:{isDeleted:true}},{new:true})
         console.log(updateDelete)
         res.status(200)
      }
   
  }
  catch(err){
   res.status(500).send({msg:"server issue",detail:err})
  } 
   
}

const deleteBlogByParams=async function(req,res){try{
   let  getobject=req.query.params
   let  getData = await blogModel.findOne(getobject).select({_id:1})
   if(getData===null){
      res.status(404).send({status: false,msg: ""})
   }
   let  updateData= await blogModel.findOneAndUpdate({_id:getData._id},{$set:{isDeleted:true}},{new:true})
   res.status(200).send({msg:updateData})
   

}
catch(err){
   res.status(500).send({msg:"server issue",detail:err})
}
   
}


module.exports={
   createAuthor,
   createBlog,
   getBlog,
   updateBlog,
   deleteBlogById,
   deleteBlogByParams
}