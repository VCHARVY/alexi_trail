const express=require('express')
const router = express.Router();
const {registerUser}=require('../controllers/Signup_control');
router.route('/').post(registerUser);
module.exports = router;