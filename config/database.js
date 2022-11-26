//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:8080/Project-2-BE12';
const mongoDB = 'mongodb://mongo:TKb6r3TOv54flYTZn5nx@containers-us-west-31.railway.app:8080';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
