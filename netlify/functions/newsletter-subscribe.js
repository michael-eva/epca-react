import { Resend } from 'resend';
import { generateEmailTemplate } from './utils/emailTemplates.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const formData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Email is required'
        })
      };
    }

    // Reuse mailing list template for newsletter subscriptions
    const template = generateEmailTemplate(formData, 'mailingList');

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: 'contact@epca.net.au',
      subject: template.subject,
      html: template.html
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Failed to send email',
          error: error.message
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'You have successfully subscribed to the EPCA newsletter!',
        data: data
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Server error',
        error: error.message
      })
    };
  }
};


