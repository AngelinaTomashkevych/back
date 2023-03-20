const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { AuthRouter, TaskmanRouter } = require('./Router');

const app = express();
const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(cookieParser());
app.use(morgan(formatLogger));
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    })
);
app.use(express.json());

app.use('/', AuthRouter);
app.use('/taskman', TaskmanRouter);

app.use((_, response) => {
    response.status(404).json({ message: 'Not found' });
});

app.use((error, _, response, _next) => {
    response.status(500).json({ message: error.message });
});

module.exports = app;
