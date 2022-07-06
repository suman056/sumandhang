const express=require("express")
const bodyParser=require("body-parser")
const mongoose= require("mongoose")
const app=express()
const route=require("./routes/route")

app.use(bodyParser.json())

mongoose.connect("",{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err.message))

app.use("/",route)



app.listen(process.env.PORT||3000,function(){console.log("Express is running on port"+(process.env.PORT||3000))})

