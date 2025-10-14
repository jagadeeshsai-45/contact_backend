const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateHandlerToken = require('../middleware/validateHandlerToken');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current',validateHandlerToken, currentUser);

module.exports = router;