const express = require('express');
const router = express.Router();
const employeesCtrl = require('../controllers/employees');
const isLoggedIn = require('../config/auth')

router.get('/companies/:companyid/employees', isLoggedIn, employeesCtrl.index);
router.get('/companies/:companyid/employees/new', isLoggedIn, employeesCtrl.new);
router.post('/companies/:companyid/employees', isLoggedIn, employeesCtrl.create)
router.get('/companies/:companyid/employees/:employeeid', isLoggedIn,employeesCtrl.show)
router.get('/companies/:companyid/employees/:employeeid/edit', isLoggedIn,employeesCtrl.edit)
router.delete('/companies/:companyid/employees/:employeeid', isLoggedIn,employeesCtrl.delete)
router.post('/companies/:companyid/employees/:employeeid', isLoggedIn, employeesCtrl.update)
router.delete('/companies/:companyid/employees/:employeeid', isLoggedIn,employeesCtrl.delete)



module.exports = router;
