const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = (passport) => {
  passport.use("local", new LocalStrategy(
    {
      usernameField: "localEmail",
      passwordField: "localPasswd",
      session: true,
    },
    async (localEmail, localPasswd, done) => {
      try {
        let user = await User.findOne({ raw : true, where : { email : localEmail, } })
        if(user) {
          let pass = await bcrypt.compare(localPasswd, user.password);
          if(pass) {
            done(null, user)
          } else {
            done(null, false);
          }
        } else {
          done(null, false);
        }
      } catch(error){
        console.log(error);
      }
    })
  )
}
