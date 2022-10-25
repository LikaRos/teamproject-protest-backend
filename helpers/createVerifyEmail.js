const { BASE_URL } = process.env;

const createVerifyEmail = (to, verificationToken) => {
  const mail = {
    to,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`,
  };
  console.log(mail);
  return mail;
};

module.exports = createVerifyEmail;
