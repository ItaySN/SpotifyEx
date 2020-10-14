const jwt = require("jsonwebtoken");
const cookie = require('cookie');


const validToken = (req,res,next) => {
    try{
        if(req.headers.cookie)
        {
            const cookies = cookie.parse(req.headers.cookie)
            let token = cookies.spotifyJwt
            if(token){
                jwt.verify(token,process.env.JWTSECRET, (err,decoded)=>{
                    if(err)
                    {
                        res.status(403).send("Access Denied")
                    }
                    else{
                        req.decoded = decoded;
                        next()
                    }
                })
            }
        }
    }catch(err){
        res.status(403).send("Access Denied")
    }
}

module.exports = {validToken};






