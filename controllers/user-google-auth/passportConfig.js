const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { User } = require("../../models/user");
require("dotenv").config();

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: `${process.env.BASE_URL}/api/googleAuth/google/callback`,
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({
            email: profile.emails[0].value,
          });
          console.log(existingUser);

          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = new User({
            method: "google",
            id: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            avatarURL: profile.photos[0].value,
          });
          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};
