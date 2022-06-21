

const check= function (req, res) {
   res.send({msg: "my middleware work perfectly"})
  
}


module.exports.check=check

