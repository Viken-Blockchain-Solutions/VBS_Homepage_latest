'use server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function subscribeToNewsletter(data) {
  try {
    const email = data.email;

    // Validate the email (you can use a function similar to the one provided earlier)
    // ...

    // Add the email to your SendGrid contact list
    const msg = {
      to: email, // Recipient email
      from: 'your_email@example.com', // Your email
      subject: 'Welcome to Our Newsletter',
      text: 'Thank you for subscribing to our newsletter!',
      html: '<strong>Thank you for subscribing to our newsletter!</strong>',
    };

    await sgMail.send(msg);

    return { success: true, message: 'Successfully subscribed!' };
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return { success: false, message: 'There was an error. Please try again.' };
  }
}
