const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema( {
   
  
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema) //users


