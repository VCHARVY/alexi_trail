const express = require('express');
const router = express.Router();
const { postData } = require('../controllers/dataControl');
router.route('/user').post(postData);
module.exports = router;
