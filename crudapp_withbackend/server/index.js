const express = require('express')
const app = express();
const bodyparser = require("body-parser")
const cors = require('cors')
app.use(cors());
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json("It is working")
})

app.use('/data', require('./router/value.js'))

app.listen(8080, (req, res) => {
    console.log("The application is listening at port 8080")
})