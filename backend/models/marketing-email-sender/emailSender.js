const nodemailer = require('nodemailer');

// Function to send email
async function sendEmail(to, subject, text) {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use other services like 'Yahoo', 'Outlook', etc.
        auth: {
            user: 'krishkansara18@gmail.com', // Your email address
            pass: 'vlhp bbrb cfhc yabd', // Your email password (or app password if 2FA is enabled)
        },
    });

    // Email options
    const mailOptions = {
        from: 'krishkansara18@gmail.com',
        to: to,
        subject: subject,
        text: text,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(`Error sending email to ${to}: ${error}`);
    }
}

// Example usage
const customers = [
    { email: 'jainnaksh576@gmail.com', name: 'Customer One' },
    { email: 'krishttanna@gmail.com', name: 'Customer Two' },
    { email: 'jenithspam@gmail.com', name: 'Customer Three'}
];

customers.forEach(customer => {
    const subject = 'We Miss You!';
    const text = `Hello ${customer.name}, we noticed you haven't been active lately. We would love to have you back!`;
    sendEmail(customer.email, subject, text);
});
