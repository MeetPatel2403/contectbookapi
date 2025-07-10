var express = require('express');
var router = express.Router();
var admin = require("../controller/admincontroller")

/* GET home page. */


router.post('/admin',admin.insert_admin)
router.post('/adminlogin',admin.login_admin)

router.get('/logout',admin.Logout);

module.exports = router;
