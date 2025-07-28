const jwt = require("jsonwebtoken")
const {JWT_SECRET2} = require('../config');

const adminMid = (req,res,next)=>{

    const token = req.headers.token;
    jwt.verify(token,JWT_SECRET2,(err,decoded)=>{
    if(err){
        res.send('invalid toks')
    }
    else
        req.id = decoded.id;
        next();
    })
}

module.exports={
    adminMid
}