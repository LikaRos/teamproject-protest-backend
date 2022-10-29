const passport = require("passport");
require("../../controllers/user-google-auth/passportConfig")(passport);
const express = require("express");
const router = express.Router();

// гугл сайн ін пейж
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// повертаємо всі місц
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect(`http://localhost:3000/home`); // TODO ЗРОБИТИ ДИНАМІЧНИМ
  }
);

module.exports = router;
