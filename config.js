require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET2=process.env.JWT_SECRET2;

module.exports = {
    JWT_SECRET,
    JWT_SECRET2
}