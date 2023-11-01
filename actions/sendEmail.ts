'use server';
import { email } from '@/libs/data';
import { validateString } from '@/libs/utils';
import { createTransport } from 'nodemailer';

const contactEmail = process.env.CONTACT_MAIL;
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: contactEmail,
    pass: process.env.CONTACT_MAIL_PASSWORD,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      status: 400,
      message: 'Invalid sender email',
    };
  }
  if (!validateString(message, 4000)) {
    return {
      status: 400,
      message: 'Invalid message',
    };
  }

  try {
    const data = await transporter.sendMail({
      from: `Contact Portfolio <${contactEmail}>`,
      to: email,
      replyTo: senderEmail as string,
      subject: 'Message contact from Portfolio',
      html: `
        <p>Hi, you have a new message from your portfolio</p>
        <p>From: <strong>${senderEmail}<strong/></p>
        <p>Message: <strong>${message}<strong/></p>
      `,
    });
    return {
      status: 200,
      message: 'Email sent successfully!',
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      error: 'Error when sending email',
    };
  }
};
