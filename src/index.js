const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const checkController= require("./controllers/checkcontroller")
const commonMW = require ("./middlewares/commonMiddlewares")
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.use (
    function (req, res, next) {
        console.log ("here I am");
        next();
  }
  );
  app.use (
    function (req, res, next) {
        console.log ("here I");
        next();
  }
  );

//   app.use('/su', route);
//   app.use('/', route);
app.post("/simplepath",commonMW.mid2 ,checkController.check)

app.listen(process.env.PORT || 3010, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3010))
});
