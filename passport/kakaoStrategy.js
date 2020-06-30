const KakaoStrategy = require('passport-kakao').Strategy;

const { User } = require('../models');

module.exports = (passport) => {
  passport.use('kakao-login', new KakaoStrategy({
    clientID : process.env.KAKAO_REST_ID,
    clientSecret : '',
    callbackURL : 'http://localhost:8080/auth/kakao/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await User.findOne({ where : { id : profile.id, provider : 'kakao'} });
      if (exUser) {
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email : profile._json.kakao_account.email,
          realname : profile.displayName,
          nickname : profile.displayName,
          id : profile.id,
          provider : 'kakao',
        });
        done(null, newUser);
      }
    } catch (error){
      console.log(error);
      done(error);
    }
  }));
};
