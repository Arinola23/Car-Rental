const bcrypt = require('bcrypt')
const {User} = require('../model/model')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async(req, res) => {
    try{
        const {username, password} = req.body
        if(!username || !password) {
            return res.status(400).json({message: 'Username and password are required'})
        }
        const existingUser = await User.findOne({username})
          if(existingUser) {
            return res.status(400).json({message: 'user already exists'})
          }
        const hashedPassword = await bcrypt.hash(password,12)
         if(!hashedPassword) {
          res.status(400).json({message: 'password should be greater than or equals to 12 characters'})
         }
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role: 'User'
         })
         await newUser.save()
         res.status(200).json({message:"User registered successfully"})
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
        console.log(error);
    }
})


module.exports = { registerUser}