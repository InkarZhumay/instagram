const AuthCode = require('./AuthCode')
const jwt = require('jsonwebtoken');

const User = require('./User');

const {jwtOptions} = require('./passport')

const createUser = async (req, res) => {
    console.log('create user start');  
    console.log(req.body.username); 
    console.log(req.body.password); 
  
        await User.create ({
                username:req.body.username,
                password:req.body.password
            });

        const token = jwt.sign({
            username:req.body.username,
            password:req.body.password,
        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        res.status(200).send({token});
}

const editUser = async (req, res) => {
    console.log(req.body.username); 
    console.log(req.body.password); 
        
        await User.edit ({
                username:req.body.username,
                password:req.body.password
            });
            
        const token = jwt.sign({
            username:req.body.username,
            password:req.body.password,
        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        res.status(200).send({token});
}    

module.exports = {
    createUser,
    editUser
}