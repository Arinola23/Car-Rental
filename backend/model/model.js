const mongoose = require('mongoose')
//model for userCredentials
const hirerSchema = mongoose.Schema({
            lastname: {
                type: String, 
                required: [true, 'please enter your lastname']
            },
            firstname: {
                type: String,
                required: [true, 'please enter your firstname']
            },
            age: {
                type: String,
                 required: [true, 'please enter your age']
                },
            email: {
                type: String, 
                required: [true, 'please enter your email'],
                unique: true
            },  // unique: true, validate: {validator: function(v) {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}, message: 'please enter a valid email address'
            phoneNumber: {
                type: String,
                 required:[true, 'please enter your phone'] 
                },
            carName: {
                type: String, 
                required: true},
            pickupDate: {
                type: Date,
                required: [true, 'please enter car pick update']
            },
            returnDate: {
                type: Date, 
                required: [true, 'please enter car return date']
            },
}, {timestamps: true
})
//model for users authentication
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }
}, {timestamps: true
})

const Hirer = mongoose.model('Hirer', hirerSchema)
const User = mongoose.model('User', userSchema)

module.exports = {Hirer, User}

