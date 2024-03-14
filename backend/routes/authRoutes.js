const express = require('express');
const router = express.Router();
const {login} = require('../controllers/logInAuthControllers')
const {registerUser} = require('../controllers/RegUserControllers')

router.post('/login',login)
router.post('/register',registerUser)

module.exports = router
