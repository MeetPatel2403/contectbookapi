const puzzle = require("../model/puzzlemodel")
const storage = require('node-persist');
storage.initSync( /* options ... */);

exports.puzzle_insert = async (req, res) => {
    try {
        var puzzlestore = await storage.getItem('id')
        var cat_id = await storage.getItem('category_id')
        console.log("cat_id from storage 123:", cat_id);
        
        req.body.cat_id = cat_id;
        if (puzzlestore !== undefined) {
            var image = req.file.originalname;
            req.body.image = image;

            var ans = req.body.ans
            var result = '';

            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var setrendom = 16 - ans.length
            for (let i = 0; i < setrendom; i++) {
                const randomInd = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomInd);
            }
            var total = result + ans
            let mixedtotal = total.split('').sort(() => Math.random() - 0.5).join('');

            req.body.char = mixedtotal
            console.log(total)


            var data = await puzzle.create(req.body)
            res.status(200).json({
                status: "successful",
                data
            })
        } else {
            res.status(200).json({
                status: "only access admin",
                data
            })
        }
    } catch (error) {
        res.status(200).json({
            status: error.message,

        })
    }
}
exports.puzzle_get = async (req, res) => {
    try {
        const category_id = await storage.getItem('category_id')
        var data = await puzzle.find({ cat_id: category_id })
        res.status(200).json({
            status: "successful",
            data
        })
    } catch {
        res.status(200).json({
            status: error.message

        })
    }
}
exports.puzzle_update = async (req, res) => {
    try {
        var puzzlestore = await storage.getItem('id')

        if (puzzlestore !== undefined) {
            await puzzle.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                status: "successful",

            })
        }
        else {
            res.status(200).json({
                status: "only admin can update"
            })
        }
    } catch {
        res.status(200).json({
            status: error.message

        })
    }
}
exports.puzzle_delete = async (req, res) => {
    try {
        var puzzlestore = await storage.getItem('id')

        if (puzzlestore !== undefined) {
            await puzzle.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: "successful",

            })
        }
        else {
            res.status(200).json({
                status: "only admin can delete"
            })
        }
    } catch {
        res.status(200).json({
            status: error.message

        })
    }
}
