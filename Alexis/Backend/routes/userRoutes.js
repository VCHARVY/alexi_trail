const express = require('express')
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userControl');
router.route('/signUp').post(registerUser);
router.route('/login').post(authUser);
console.log("it is in userRoute1")
module.exports = router;