const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User}= require('../model/model.js')
const asyncHandler = require('express-async-handler')

const login = asyncHandler(async(req, res)=> {
    const {username, password} = req.body
     const user = await User.findOne({username})
        if(!user) {
            res.sendStatus(400).json({message:'invalid username or password'})
        }
    const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch) {
            const accessToken = jwt.sign({username: user.username, role: user.role}, process.env.ACCESS_TOKEN_SECRET)
                if(user.role === 'Admin') {
                    return res.json({message: "welcome Admin", accessToken})
                } else {
                    return res.json({message:"welcome user", accessToken})
                 } 
        } else {
           return res.json(400).send("Invalid username or password")
        }
})

const verifyToken = asyncHandler(async(req, res, next) => {
    const token = req.headers['authorization']
      if(!token) {
        return res.json(401).send('Access Denied');
      }
      try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
         req.user = decoded
          next()
      } catch (err){
        console.log(err)

        return res.status(500).send("Invalid token")
      }
})

module.exports = {login, verifyToken}

