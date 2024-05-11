const express = require('express');
const router = express.Router();
const dataController = require('../controllers/userController');

// Route to fetch data
router.get('/data', dataController.fetchData);
router.post('/login', dataController.loginUser);
module.exports = router;