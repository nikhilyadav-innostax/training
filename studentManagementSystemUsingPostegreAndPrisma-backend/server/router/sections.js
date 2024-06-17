const express = require('express')
const router = express.Router();
const sectionController = require("../controllers.js/section.controller")

router.post('/addsection', sectionController.createSection )

module.exports = router