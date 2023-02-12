const express = require('express');

const { login, registration, logout } = require('../controllers');

const Router = express.Router();

Router.post('/signin', login);
Router.post('/signup', registration);
Router.post('/logout', logout);

module.exports = { AuthRouter: Router };
