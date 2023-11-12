const express = require('express');
const router = express.Router();
const { postData,postPatient } = require('../controllers/dataControl');
router.route('/user').post(postData);
router.route('/patient').post(postPatient);
module.exports = router;
