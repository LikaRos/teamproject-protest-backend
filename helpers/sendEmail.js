const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = {
    to: "lika.rossinskayad@gmail.com",
    from: "lika.rossinskayad@gmail.com",
    subject: "Когда это закончится????",
    html: "2-3 недели",
  };
  console.log(mail);
  //   const mail = { ...data, from: "lika.rossinskayad@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
