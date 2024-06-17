const express = require('express')
const router = express.Router();
const subjectController = require('../controllers.js/subject.controller')

// api = http://localhost:3000/subjects/addsubject
router.post('/addsubject',subjectController.createSubject )

module.exports = router