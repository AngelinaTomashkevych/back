const express = require('express');
const Router = express.Router();

Router.get('/tasks', (request, response, next) => {
    response.status(200).json({ messge: 'get tasks' });
});

module.exports = Router;
