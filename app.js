const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { AuthRouter } = require('./Router');

const corsMiddleware = cors();

const app = express();
const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatLogger));
app.use(corsMiddleware);
app.use(express.json());

app.use('/', AuthRouter);

app.use((_, response) => {
    response.status(404).json({ message: 'Not found' });
});

app.use((error, _, response, _next) => {
    response.status(500).json({ message: error.message });
});

module.exports = app;
