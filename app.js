const express = require('express');
const cors = require('cors');

const { TasksRouter } = require('./Router');

const corsMiddleware = cors();

const app = express();

app.use(corsMiddleware);

app.use('/app', TasksRouter);

app.use((_, response) => {
    response.status(404).json({ message: 'Not found' });
});

app.use((error, _, response, _next) => {
    response.status(500).json({ message: error.message });
});

module.exports = app;
