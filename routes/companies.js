const express = require('express');
const router = express.Router();
const companiesCtrl = require('../controllers/companies');
const isLoggedIn = require('../config/auth')

router.get('/', isLoggedIn, companiesCtrl.index);
router.get('/new', isLoggedIn, companiesCtrl.new);
router.post('/', isLoggedIn, companiesCtrl.create)
router.get('/:id', isLoggedIn,companiesCtrl.show)
router.get('/:id/edit', isLoggedIn,companiesCtrl.edit)
router.delete('/:id', isLoggedIn,companiesCtrl.delete)



module.exports = router;
