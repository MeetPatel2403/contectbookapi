const mongoose = require("mongoose")
const userpuzzle = new mongoose.Schema({
    name:String,
    image:String,
    char:String,
    ans:String,
    cat_id:String
})
module.exports = mongoose.model("puzzle",userpuzzle)