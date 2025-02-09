import nodemailer from "nodemailer";
export async function sendEmail({ name, email, phone, message }: { name: string, email: string, phone: string, message: string }) {

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GOOGLE_APP_USERNAME,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  // const directmails = ['studenic.maros@gmail.com', 'cetunawe@gmail.com']
  const sender = 'studenic.maros@gmail.com';

  // const mailData = {
  //     from: {
  //         name: `Cetunawe.sk`,
  //         address: sender,
  //     },
  //     replyTo: email,
  //     to: directmails[0],
  //     subject: `Cetunawe.sk | Vyplneny formular`,
  //     text: `Bol vyplnený formulár na stránke cetunawe.sk s nasledujúcimi údajmi: \n Meno: ${name} \n Email: ${email} \n Telefon: ${phone} \n Predmet: ${subject} \n Sprava: ${message}`,
  //     // html: `${text}`,
  // };

  const mailData = (recipient: string) => {
    return {
      from: {
        name: `Slowood.sk`,
        address: sender,
      },
      replyTo: email,
      to: recipient,
      subject: `Slowood.sk | Vyplneny formular`,
      text: `Bol vyplnený formulár na stránke slowood.sk s nasledujúcimi údajmi: \n Meno: ${name} \n Email: ${email} \n Telefon: ${phone} \n Sprava: ${message}`,
    }

  }

  //TODO use recipient mail
  const RECIPIENT_MAIL = 'slowood@gmail.com';
  console.log(RECIPIENT_MAIL);
  const STUDENIC_MAIL = 'studenic.maros@gmail.com';

  // TODO add recipient email
  const promises = [STUDENIC_MAIL, RECIPIENT_MAIL].map((mail) => new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData(mail), (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  }));

  await Promise.all(promises);

  return true;
}