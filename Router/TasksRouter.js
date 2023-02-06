const express = require('express');

const { getTasks } = require('../controllers/tasks');

const Router = express.Router();

Router.get('/tasks', getTasks);

module.exports = { TasksRouter: Router };
