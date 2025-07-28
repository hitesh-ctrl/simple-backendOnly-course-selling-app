const {JWT_SECRET} = require('../config');
const jwt = require("jsonwebtoken")
const userM = (req,res,next)=>{

    const token = req.headers.token;
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
    if(err){
        res.send('invalid toks')
    }
    else
        req.id = decoded.id;
        next();
    })
}

module.exports={
    userM
}