const express = require('express');
// const db = require('./db');

const app = express();

const bodyparser = require('body-parser')
app.use(bodyparser.json());

const students =  require('./router/students')
const teachers = require('./router/teachers')
const sections = require('./router/sections')
const subjects = require('./router/subjects')
const courses = require('./router/courses')

app.use(express.json());

app.get('/', async(req, res) => {
    res.json("Connected")
})

app.use('/students', students)
app.use('/teachers',teachers)
app.use('/sections', sections )
app.use('/courses', subjects)
app.use('/subjects', courses)

app.listen(3000, (req, res) => {
    console.log("Server listening on port 3000")
})