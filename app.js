const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

//connection to database
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

//import
const adminRoutes = require('./routes/adminRoutes')

//ex
app.use('/admin', adminRoutes)

// routes
app.use(authRoutes);
app.use(userRoutes);

app.listen(process.env.PORT||3000, function () {
    console.log(`listen on port ${process.env.PORT || 3000}`);
});

