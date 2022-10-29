const GoogleStrategy = require("passport-google-oauth2").Strategy;
const UserGoogle = require("../../models/googleUserModel");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3001/api/googleAuth/google/callback",
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await UserGoogle.findOne({
            "google.id": profile.id,
          });
          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = new UserGoogle({
            method: "google",
            google: {
              id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            },
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
