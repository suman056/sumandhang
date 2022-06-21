const express = require('express');
const router = express.Router();
const cmController=require("../controllers/blogdcontroller")


router.post("/authors",cmController.createAuthor)
 
router.post("/blogs",cmController.createBlog)


router.get("/blogs",cmController.getBlog)


router.put("/blogs/:blogId",cmController.updateBlog)


router.delete("/blogs/:blogId",cmController.deleteBlogById)


router.delete("/blogs",cmController.deleteBlogByParams)




module.exports = router;