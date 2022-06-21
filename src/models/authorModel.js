const mongoose = require('mongoose');
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        'valid email': [validateEmail, 'Please fill a valid email address'],
        trim: true
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        trim: true
    }



}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
