//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:27017/Project-2-BE12';
const mongoDB = 'mongodb://mongo:3qTUFD0S6S1BRmaUK6Ss@containers-us-west-115.railway.app:6298';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
