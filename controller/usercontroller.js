const user = require("../model/usermodel")
var category = require("../model/categorymodel")
const puzzle = require("../model/puzzlemodel")
const storage = require('node-persist');
storage.initSync( /* options ... */);


exports.insert = async (req, res) => {
    try {

        var data = await user.create(req.body)
        res.status(200).json({
            status: "successful",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.get_data = async (req, res) => {
    try {
        var data = await user.find()
        res.status(200).json({
            status: "successful",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.update_data = async (req, res) => {
    try {
        await user.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "successful",

        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.delete_data = async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "successful",
            
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.category_all = async (req, res) => {
    try {
        var data = await category.find()
        res.status(200).json({
            status: "successful",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.puzzle_category_wise = async (req, res) => {
    try {
        
        const cat_id = req.params.id


        const data = await puzzle.find({ cat_id: cat_id });

        res.status(200).json({
            status: "successful",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.single_puzzle = async (req, res) => {
    try {
        var data = await puzzle.findById(req.params.id)
        res.status(200).json({
            status: "successful",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.puzzle_win = async (req, res) => {
    try {
        const puzzle_id = req.body.id
        const puzzle_ans = req.body.ans
        console.log(puzzle_ans)
        
        var data = await puzzle.findById(puzzle_id)
         
         const isCorrect = data.ans === puzzle_ans
       
        res.status(200).json({
            status: "successful",
            isCorrect

        })
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}