const { BASE_URL } = process.env;

const createVerifyEmail = (to, verificationToken) => {
  const mail = {
    to,
    subject: "Підтвердження реєстрації на сайті",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Натисніть для підтвердження реєстрації</a>`,
  };
  console.log(mail);
  return mail;
};

module.exports = createVerifyEmail;
