const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/users/signup",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.signup)
);
router.get("/users/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  ctrlWrapper(ctrl.resendEmail)
);

// signin
router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/users/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.avatarUpdate)
);

module.exports = router;
