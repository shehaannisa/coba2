//Set up mongoose connection
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:27017/Project-2-BE12';
const mongoDB = 'mysql://root:NTIFTnAXj3bXBQOh7iEk@containers-us-west-65.railway.app:7397/railway';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;
