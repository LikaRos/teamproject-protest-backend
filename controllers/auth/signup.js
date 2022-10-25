const bcrypt = require("bcryptjs");
require("dotenv").config();
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");

const { RequestError, createVerifyEmail } = require("../../helpers");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email in use");
  }
  const { BASE_URL } = process.env;
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL: gravatar.url(email),
    verificationToken,
  });

  const mail = createVerifyEmail(email, verificationToken);
  await sendEmail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription.enum,
  });
};

module.exports = register;
