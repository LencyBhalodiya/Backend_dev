const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, `../.env.${process.env.NODE_ENV}`)
dotenv.config({ path: envPath });


module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000
}