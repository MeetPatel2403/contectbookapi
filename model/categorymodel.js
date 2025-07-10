const mongoose = require("mongoose");
const usercategory = new mongoose.Schema({
    name:String,
    image:String   
})
module.exports = mongoose.model("category",usercategory)