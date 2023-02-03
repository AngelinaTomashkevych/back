const express = require('express');

const app = express();

app.use((request, response, next) => {
    next();
});

app.get('/tasks', (request, response) => {
    response.json({ message: 'success' });
});

app.listen(3000);
