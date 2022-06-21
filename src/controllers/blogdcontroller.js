const authorModel= require("../models/authorModel")
const blogModel=require("../models/blogModel")

 const createAuthor= async function(req,res){
   
 }

 const createBlog=async function(req,res){
   
 }

 const getBlog=async function(req,res){
   try{
      let query=req.query.params
      // let authorId=req.query.author-Id
      // let category=req.query.category
      // let tag=req.query.tags
   let allBlogs=await blogModel.find({isDeleted:false},{published:true},query)
   if(allBlogs){
      res.status(200).send({msg:allBlogs})
   }
   res.status(404).send({msg:"Not Found"})
   }
   catch(error){
      res.ststus(500).send({msg:"error in server"},error.message)
   }
   
}
const updateBlog=async function(req,res){
   let blogId=req.params.blogId
   let blog= await blogModel.find(blogId)
   

   
}

const deleteBlogById=async function(req,res){
   
}

const deleteBlogByParams=async function(req,res){
   
}


module.exports={
   createAuthor,
   createBlog,
   getBlog,
   updateBlog,
   deleteBlogById,
   deleteBlogByParams
}