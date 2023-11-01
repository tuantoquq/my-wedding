'use server';
import { groomEmail, brideEmail } from '@/libs/data';
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

export const sendWishes = async (formData: FormData) => {
  const senderName = formData.get('senderName');
  const message = formData.get('message');

  if (!validateString(senderName, 500)) {
    return {
      status: 400,
      message: 'Invalid sender name',
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
      from: `Tuan Bich Wedding Wishes <${contactEmail}>`,
      to: [groomEmail, brideEmail],
      subject: 'One wish from Wedding website',
      html: `
        <p>Hi Tuan groom and Bich bride, you have receive one wish from one your friend with name: <strong>${senderName}<strong/> </p>
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
