const AuthCode = require('./AuthCode')

const User = require('./User');

const verifyCode = async (req, res) => {
    console.log(req.body);

    const authCode = await AuthCode.findOne({
        where: {email: req.body.email},
        // order: [['valid_till', 'DESC']],
    })

    if(authCode){
        res.status(401).send({error: "code is invalid"});
    } else if(authCode.code !== req.body.code) {
        res.status(401).send({error: "code is invalid"});
    }
    else {    

        let user = await User.findOne({where: {email: req.body.email}});
        const role = await Role.findOne({where: {name: 'employee'}})

        if(!user) {
            
            user = await User.create ({
                roleId: role.isSoftDeleted,
                email:req.body.email
            })
        }

        
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            phone: user.phone,
            role: {
                id: role.id,
                name: role.name
            }, 
        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        res.status(200).send({token});
    }

    // console.log(new Date(authCode.valid_till).getTime() > Date.now());
    
}

module.exports = {
    verifyCode
}