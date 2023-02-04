const express = require('express');
const cors = require('cors');
const Router = require('./Router');

const corsMiddleware = cors();

const app = express();

app.use(corsMiddleware);

app.use((request, response, next) => {
    next();
});

app.use('/app', Router);

app.use((_, response) => {
    response.status(404).json({ message: 'Not found' });
});

app.use((error, _, response, __) => {
    response.status(500).json({ message: error.message });
});

app.listen(3000);
