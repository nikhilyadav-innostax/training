const express = require('express');
const router = express.Router();
const teacherController = require("../controllers.js/teachers.controller")

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// api = http://localhost:3000/teachers/addteacher
router.post('/addteacher' , teacherController.createTeacher)

module.exports = router