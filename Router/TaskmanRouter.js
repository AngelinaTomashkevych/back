const express = require('express');

const { getTasks, addTask } = require('../controllers');

const Router = express.Router();

Router.get('/get-tasks', getTasks);
Router.post('/add-task', addTask);

module.exports = { TaskmanRouter: Router };
