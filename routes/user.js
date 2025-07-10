var express = require('express');
var router = express.Router();
var user = require("../controller/usercontroller")
var category = require("../controller/usercontroller")
var puzzle = require("../controller/usercontroller")


/* GET home page. */


router.post('/insertuser',user.insert)
router.get('/getdata',user.get_data);
router.post('/update/:id',user.update_data)
router.get('/delete/:id',user.delete_data);
router.get('/category',category.category_all)
router.get('/puzzlecategory/:id',puzzle.puzzle_category_wise)
router.get('/singlepuzzle/:id',puzzle.single_puzzle)
router.get('/win',puzzle.puzzle_win)




module.exports = router;
