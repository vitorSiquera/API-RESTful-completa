const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Registrar um usuário
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Login de usuário
router.post('/login', login);

module.exports = router;