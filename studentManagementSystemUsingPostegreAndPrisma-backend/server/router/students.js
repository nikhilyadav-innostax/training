const express = require('express');
const router = express.Router();
const students = require('../controllers.js/students.controller')

// api = http://localhost:3000/students/addstudent
router.post('/addstudent',students.createStudent )

module.exports = router