const express = require('express');
const authRouter = express.Router();
const { login, getLoginUser, updateUser } = require('../controllers/authController');
const { loginValidations } = require('../validations/userValidation');
const authenticateLogin = require('../middleWares/authenticateLogin');

authRouter.post("/login", loginValidations, login);

module.exports = authRouter;