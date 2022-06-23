const express = require('express');
const router = express.Router();
const cmController=require("../controllers/blogdcontroller")
const middleware=require("../middleware/auth")


router.post("/authors",cmController.createAuthor)
 
router.post("/blogs",middleware.authentication,cmController.createBlog)

router.get("/blogs",middleware.authentication,cmController.getBlog)

router.post("/login",cmController.loginAuthor)

router.put("/blogs/:blogId",middleware.authentication,middleware.Authorisation,cmController.updateBlog)

router.delete("/blogs/:blogId",middleware.authentication,middleware.Authorisation,cmController.deleteBlogById)

router.delete("/blogs",middleware.authentication,middleware.Authorisation,cmController.deleteBlogByParams)




module.exports = router;