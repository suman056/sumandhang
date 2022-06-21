

const mid2= function ( req, res, next) {
    let ip =req.ip
    let url=req.originalUrl
    const date = new Date
    console.log(date);
    console.log(ip)
    // console.log(url)
    console.log(req.headers)
    
    next()

}

module.exports.mid2=mid2