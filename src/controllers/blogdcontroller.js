const authorModel= require("../models/authorModel")
const blogModel=require("../models/blogModel")

const createAuthor= async function(req,res){
   try{
      let data = req.body
      if(!data.fname)
      return res.status(400).send({status:false, msg:"fname is mandatory"})
      if(!data.lname)
      return res.status(400).send({status:false, msg:"lname is mandatory"})
      if(!data.title)
      return res.status(400).send({status:false, msg:"title is mandatory"})
      if(!data.email)
      return res.status(400).send({status:false, msg:"email is mandatory"})
      if(!data.password)
      return res.status(400).send({status:false, msg:"email is mandatory"})


      let saveData = await authorModel.create(data)
      res.status(201).send({msg: saveData})
   }catch(err){
      console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

 


const createBlog=async function(req,res){
   try{
      let data = req.body
      if(!data.title)
      return res.status(400).send({status:false, msg:"title is mandatory"})
      if(!data.body)
      return res.status(400).send({status:false, msg:"body is mandatory"})
      if(!data.authorId)
      return res.status(400).send({status:false, msg:"authorId is mandatory"})
      if(!data.category)
      return res.status(400).send({status:false, msg:"category is mandatory"})

      let saveData = await blogModel.create(data)
      res.status(201).send({msg: saveData})
   }catch(err){
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
 }
}



const getBlog=async function(req,res){
   try{
      let query=req.query.params
      // let authorId=req.query.author-Id
      // let category=req.query.category
      // let tag=req.query.tags
      let allBlogs=await blogModel.find({isDeleted:false},{published:true},query)
      if(allBlogs){
      //if(array.keys(allBlogs)==0){
      res.status(200).send({msg:allBlogs})
   }
   res.status(404).send({msg:"Not Found"})
   }
   catch(error){
      res.ststus(500).send({msg:"error in server"},error.message)
   }
   
}




const deleteBlogById=async function(req,res){
   try{
      let blogid=req.params.blogId
      let findId= await blogModel.findOne({_id:blogid}).select({_id:1})
      if(findId===null){
      res.status(404).send({status: false, msg: ""})}
      else{
         let updateDelete= await blogModel.findOneAndUpdate({_id:findId._id},{$set:{isDeleted:true,deletedAt:Date.now()}},{new:true})
         console.log(updateDelete)
         res.status(201).send({status:true, msg: "blog is deleted"})
      }
   }
  catch(err){
      res.status(500).send({msg:"server issue",detail:err})
  } 
   
}


const deleteBlogByParams=async function(req,res){
   try{
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