// app/api/subscribe/route.js
'use server'
import { MailService } from '@sendgrid/mail';

export default async function subscribeToNewsletter(email) {
    // Add the email to your SendGrid contact list
    const msg = {
        to: email,
        from: 'ivo@vikenblockchain.com',
        subject: 'Welcome to Our Newsletter',
        text: 'Thank you for subscribing to our newsletter!',
        html: '<strong>Thank you for subscribing to our newsletter!</strong>',
    };

    await MailService.send(msg);

    return { success: true, message: 'Thank you for subscribing!' };
}