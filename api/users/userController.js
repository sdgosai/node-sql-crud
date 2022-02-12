const { create } = require('./userModel')
const { genSaltSync, hashSync } = require('bcrypt')

module.exports = {
    createUser: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt)
        create(body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message: " Database Connection Error"
                })
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    }
}