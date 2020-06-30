const local = require('./localStrategy')
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    User.findOne({ where : { id : id } })
    .then(user => done(null, user.id))
    .catch(err => done(err));
  });

  local(passport);
  kakao(passport);
};
