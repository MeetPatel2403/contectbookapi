const storage = require('node-persist');
var admin = require("../model/adminmodl")
storage.initSync( /* options ... */ );
exports.insert_admin = async (req, res) => {
    try {
        
        var data = await admin.create(req.body)
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
exports.login_admin = async (req, res) => {
    try {
        var data = await admin.find({ username: req.body.username })

        if (data.length == 1) {
            if (data[0].password == req.body.password) {
                await storage.setItem('id',data[0]._id)
                res.status(200).json({
                    
                    status: "admin login successful"
                })
            }
        }
    } catch (error) {
            res.status(400).json({
                    status: "check username and password"
                })
    }
}


exports.Logout = async (req,res) => {
    storage.clear();
    res.status(200).json({
        status:"Logout"
    })
}
