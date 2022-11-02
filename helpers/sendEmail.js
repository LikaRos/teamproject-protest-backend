const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = {
    from: "olabramov@meta.ua",
    ...data,
  };
  console.log(mail);
  await sgMail.send(mail);

  return true;
};

module.exports = sendEmail;
