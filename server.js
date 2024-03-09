const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email provider
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password' // Replace with your email password
    }
});

// Handling POST requests to '/send-email'
app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body; // Adjust according to your form fields

    const mailOptions = {
        from: email,
        to: 'andrasik.andrej@gmail.com', // Where you want to receive the messages
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email successfully sent');
    });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
