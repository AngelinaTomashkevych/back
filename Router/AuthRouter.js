const express = require('express');

const { login, registration, logout, checkAuth } = require('../controllers');

const Router = express.Router();

Router.get('/check-auth', checkAuth);
Router.post('/signin', login);
Router.post('/signup', registration);
Router.post('/logout', logout);

module.exports = { AuthRouter: Router };
