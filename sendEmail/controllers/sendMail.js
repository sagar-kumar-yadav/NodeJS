const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp server
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'santiago5@ethereal.email',
            pass: '68tsGzdTZyvC6xHNqd'
        },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <sagar@gmail.com>', // sender address
        to: "sk5323912@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    res.json(info);
};

module.exports = sendMail;