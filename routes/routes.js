const express = require("express");
const empData = require("../controller/adminController");
const adminData = require("../controller/adminController");
const employeeData = require("../controller/employeeController");
const router = express.Router()

router.post('/emp/create', employeeData)
router.post('/admin/create', adminData)
router.post('/popluate/getdata',empData )

module.exports = router;