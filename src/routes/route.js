const express = require('express');
const router = express.Router();
const cmController=require("../controllers/blogdcontroller")
const middleware=require("../middleware/auth")


router.post("/authors",cmController.createAuthor)
 
router.post("/blogs",middleware.authentication,cmController.createBlog)


router.get("/blogs",middleware.authentication,cmController.getBlog)


router.put("/blogs/:blogId",cmController.updateBlog)


router.delete("/blogs/:blogId",cmController.deleteBlogById)


router.delete("/blogs",cmController.deleteBlogByParams)




module.exports = router;