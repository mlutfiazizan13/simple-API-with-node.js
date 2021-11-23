const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv/config");

//express app
const app = express();

//database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

const PortofolioRoute = require('./routes/Portofolio');

app.use('/portofolio', PortofolioRoute)



app.listen(5000, () => {
    console.log('Server is Running')
});