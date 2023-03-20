const { login, registration, logout, checkAuth } = require('./auth');
const { getTasks, addTask } = require('./taskman');

module.exports = { login, registration, logout, checkAuth, getTasks, addTask };
