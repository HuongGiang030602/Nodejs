const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express();
const port = 3000;

const userRoutes = require('./routes/v1/userRoutes')
const API_V1 = require('./routes/v1');
const errorHandle = require('./middlewares/errorHandler');

app.get('/', (req, res) => {
  res.send('Xin chào các bạn 123!');
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/users',userRoutes)
app.use('/v1',API_V1)

app.use(errorHandle)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});