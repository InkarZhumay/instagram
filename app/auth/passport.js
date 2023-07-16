const passport = require('passport')
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('./User')

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_password_here'
};

passport.use(new JWTStrategy(jwtOptions,async (jwtPayload, done) => {
    console.log('password.use working');
    const user = await User.findByPk(jwtPayload.id)
    if(user) done(null, user)
    else done(null, false)
}));

module.exports = {
    jwtOptions
}