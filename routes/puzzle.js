var express = require('express');
var router = express.Router();
const multer = require('multer');

var puzzle = require("../controller/puzzlecontroller")

/* GET home page. */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
router.post('/puzzle',upload.single("image"),puzzle.puzzle_insert)
router.get('/puzzleget',upload.single("image"),puzzle.puzzle_get)
router.post('/puzzleupdate/:id',upload.single("image"),puzzle.puzzle_update)
router.get('/puzzledelete/:id',upload.single("image"),puzzle.puzzle_delete)
module.exports = router;