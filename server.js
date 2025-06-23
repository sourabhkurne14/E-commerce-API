
const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db')
connectDB();

const productsRouter = require('./routes/products')
const createUserRoute = require('./routes/createUser.js')

const app = express()

const PORT = 3000;


app.use(express.json());

app.get('/hii', (req, res) => {
    res.send("hello ");
})

app.use('/products', productsRouter);
app.use('/create-user', createUserRoute);

app.listen(PORT, ()=> {
    console.log(`App running on PORT: ${PORT}`)
});




