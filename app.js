const app = require('express')()
const port = process.env.port || 1116
const mailer = require('./mailer')

app.get('/', (req, res) => {

    let mailOptions = {
        from: '<teaminstagramme@gmail.com>',
        to: 'shaikhfai@hotmail.com, www.shtakkar@gmail.com, shaikhfai@yahoo.com',
        subject: 'Activate your account',
        html: '<b>Activate your account by clicking on the below link:<br><a href="https://www.youtube.com">Activate</a></br>'
    }

    mailer.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err)
        } else {
            console.log('Sent!')
        }
    })    

    res.send('NodeJS with Nodemailer')
})

app.listen(port, () => {
    console.log(`App running..`)
})