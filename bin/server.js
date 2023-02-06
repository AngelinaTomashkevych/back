const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('../app');

dotenv.config();

const { PORT, DB_HOST } = process.env;

mongoose.set('strictQuery', true);

mongoose
    .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT || 3000))
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
