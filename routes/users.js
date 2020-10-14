const { Router } = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require('../models');
const cookieParser = require('cookie-parser');

const router = Router();

router.use(cookieParser());
const {validToken} = require('./validToken')

const newToken = (userId,userName) => {
    const token = jwt.sign(
        {
        id: userId ,
        userName: userName
    },
    process.env.JWTSECRET,
    {
        expiresIn:"5h",
    }
    )
    return token;
}

router.post('/register' , async (req,res) =>{
    try{
        const newUser = {
            name : req.body.userName,
            email : req.body.email,
            password : await bcrypt.hash(req.body.password,10)
        }
        const user = await Users.create(newUser);
        const token = newToken(user.id, user.name);
        res.cookie("spotifyJwt",token);
        res.send("Register Success")

    }catch(err){
        console.log(err)
    }
})

router.post('/login', async (req,res) => {
    try{
        const email = req.body.email
        if(email)
        {
            const user = await Users.findOne({
                where:{
                    email:email
                }
            })
            console.log(user)
            if(user){
               const check = await bcrypt.compare(req.body.password,user.password)
               if(check){
                    const token = newToken(user.id, user.name);
                    res.cookie("spotifyJwt",token);
                    res.send("Login Success")
               }
               else{
                   res.send("Wrong password/email")
               }
            }
        }
        else{
            res.status(500).send('Somthing Wrong')
        }
    }catch(err){

    }
})

router.get('/logout',validToken, async (req,res) =>{
    try{
        console.log(validToken)
        res.cookie("spotifyJwt", "");
        res.send("logOut Success")
    }catch(err){
        res.status(500).send("Something went wrong")
    }
})

module.exports = router;