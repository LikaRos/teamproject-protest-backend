const passport = require("passport");
require("./controllers/user-google-auth/passportConfig")(passport);
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
    res.redirect("/profile/");
  }
);

// прямий редірект
router.get("/profile", (req, res) => {
  console.log(req);
  res.send(req);
});

module.exports = router;
