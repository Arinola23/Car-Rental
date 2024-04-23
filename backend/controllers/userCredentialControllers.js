const asyncHandler = require('express-async-handler')
const Hirer = require('../model/model.js')

const setHirer = asyncHandler(async (req, res) => {
    try {
        if (!req.body.lastname || !req.body.firstname || !req.body.age || !req.body.email || !req.body.phoneNumber || !req.body.carList || !req.body.pickupDate || !req.body.returnDate) {
        res.status(400).json({message: 'All fields are required'})
    } const hirer = await Hirer.create({
        lastname:req.body.lastname, 
        firstname:req.body.firstname, 
        age:req.body.age, 
        email:req.body.email, 
        phoneNumber:req.body.phoneNumber,
        carList:req.body.carList, 
        pickupDate:req.body.pickupDate, 
        returnDate:req.body.returnDate
        // pickupDate:new Date(), 
        // returnDate:new Date ()
    })
     res.status(202).json( hirer)
    } catch(error) {
        console.log(error)
            return res.status(500).json({ message: 'Server error, try again' });
        }
})

const getAllHirers = asyncHandler(async(req,res)=> {
    try{
        const hirer = await Hirer.find()
        if(!hirer) {
            res.status(404).json({message: 'hirer not found'});
        }
        res.status(200).json(hirer)
    } catch(error) {
        console.error(error);
        res.status(500).json({message: 'server error'})
    }
})

const updateHirer = asyncHandler(async(req,res) => {
    try{
        const hirer = await Hirer.findById(req.params.id)
            if(!hirer) {
                res.status(404).json({message:'Hirer not found'});
            }
        const updateHirer = await Hirer.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.status(200).json(updateHirer)
    } catch(err){
        console.error(err);
        res.status(500).json({message:'server error'});
    }
})

const getOneHirer = asyncHandler(async(req,res) =>{
try {
    const hirer = await Hirer.findById(req.params.id)
       if(!hirer){
        res.status(404).json({message:'hirer not found'});
       }    
       res.status(200).json(hirer);
    } catch(err){
        res.status(500).json({message:'server error'});
    }
})

const deleteHirer = asyncHandler(async(req,res) =>{
    try {
        const hirer = await Hirer.findByIdAndDelete(req.params.id)
        if(!hirer){
            res.status(404).json({message:"hirer not found"});
        }
           res.status(200).json({message: "hirer deleted", hirer});
    } catch(err){
        // console.log(err);
        res.status(500).json({message:"Error while deleting"});
    }
});

module.exports = { setHirer, getAllHirers, updateHirer, getOneHirer, deleteHirer}