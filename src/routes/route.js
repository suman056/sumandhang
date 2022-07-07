const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const validateUser = require("../validator/uservalidation.js")
const createBook=require("../controllers/bookController")
const bookvalidation=require("../validator/bookvalidation")
const bookController=require("../controllers/bookController")

 router.post('/books',bookvalidation,createBook)

 router.get("/books",bookController.getBookbyQuerry)

router.post("/register", validateUser.checkCreate , userController.createUser )

router.post("/login", validateUser.checkLogin , userController.userLogin )


router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})



module.exports = router;