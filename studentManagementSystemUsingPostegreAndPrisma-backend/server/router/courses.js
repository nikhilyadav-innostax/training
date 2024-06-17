const express = require('express');
const router = express.Router();
const coursesController = require('../controllers.js/courses.controller')

// api = http://localhost:3000/courses/addcourses
router.post('/addcourses', coursesController.createCourses )

module.exports = router