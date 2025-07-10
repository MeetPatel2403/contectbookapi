const storage = require('node-persist');
storage.initSync( /* options ... */ );
var category = require("../model/categorymodel")
exports.insert_category = async (req, res) => {
    try {
        const persit_id= await storage.getItem('id')
        if(persit_id!==undefined){
            var image= req.file.originalname;
            req.body.image=image;
            var data = await category.create(req.body)
                res.status(200).json({
                    status: "successful",
                    data
                })
            await storage.setItem('category_id',data._id)
                
// hii
        }
        else{
            res.status(200).json({
                status: "please login",
                data
            })
        }
       
    } catch (error) {
        res.status(400).json({
            status: error.message
        })
    }
}
exports.viewcategory = async(req,res)=>{
    try {
        var data = await category.find()
         res.status(400).json({
            status:"successful",
            data
        })

    } catch (error) {
         res.status(400).json({
            status: error.message
        })
    }
}                                                                        
exports.update_category = async(req,res)=>{
    try {
        await category.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            status:"successful"
        })
    } catch (error) {
       res.status(200).json({
        status:error.message
       }) 
    }
}

