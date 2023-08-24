// app/api/subscribe/route.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const subscribeToNewsletter = async (email) => {
    // Add the email to your SendGrid contact list
    const msg = {
        to: email, // Recipient email
        from: 'your_email@example.com', // Your email
        subject: 'Welcome to Our Newsletter',
        text: 'Thank you for subscribing to our newsletter!',
        html: '<strong>Thank you for subscribing to our newsletter!</strong>',
    };
    
    await sgMail.send(msg);
};