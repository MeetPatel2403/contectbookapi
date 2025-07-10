var express = require('express');
const multer = require('multer');

var router = express.Router();


var category = require("../controller/categorycontroller")


/* GET users listing. */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })


router.post('/category',upload.single("image"),category.insert_category);
router.post('/update/:id',upload.single("image"),category.update_category)
router.get('/view',upload.single("image"),category.viewcategory)





module.exports = router;
