const nodemail = require('nodemailer')

let transporter = nodemail.createTransport({
    service: "gmail",
    auth: {
        user: 'teaminstagramme@gmail.com',
        pass: "iamainstagram"
    }
})

module.exports = transporter