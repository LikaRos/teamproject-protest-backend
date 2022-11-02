const passport = require('passport');
require('../../controllers/user-google-auth/passportConfig')(passport);
const express = require('express');
const { User } = require('../../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  async (req, res, next) => {
    try {
      const { email, id, avatarURL } = req.user;

      const payload = {
        id: id,
      };

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });

      await User.findByIdAndUpdate(id, { token });
      await User.findByIdAndUpdate(id, { verify: true });
      res.redirect(
        `${process.env.FRONT_URL}/auth?email=${email}&token=${token}&avatarURL=${avatarURL}`
      );
      console.log(avatarURL);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
