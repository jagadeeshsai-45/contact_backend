const express = require('express');
const connectDB = require('./config/dbConnection');
const errorhandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', require('./routers/contactRouters'));
app.use('/api/users', require('./routers/userRouters'));
app.use(errorhandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



