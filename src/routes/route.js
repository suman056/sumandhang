const express = require('express');
const router = express.Router();

const checkController= require("../controllers/checkcontroller")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/simplepath",commonMW.mid2 ,checkController.check)


module.exports = router;