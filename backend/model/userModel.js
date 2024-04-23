const mongoose = require('mongoose')


// model for users authentication
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
    },
    // email: {
    //     type: String, 
    //     required: [true, 'please enter your email'],
    //     unique: true
    // },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }
}, {timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User