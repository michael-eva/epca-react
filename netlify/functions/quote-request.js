const { Resend } = require('resend');
const { generateEmailTemplate } = require('./utils/emailTemplates.js');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
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
    const formData = JSON.parse(event.body);

    if (!formData.fullName || !formData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Full Name and Email are required'
        })
      };
    }

    // Spam checks: a filled honeypot field means a bot auto-filled every input,
    // and a near-instant submission means no human read the form first.
    // Both cases return a fake success so bots don't learn to adapt.
    const isHoneypotFilled = Boolean(formData.website);
    const elapsedMs = Date.now() - Number(formData.formLoadedAt || 0);
    const isTooFast = !Number.isFinite(elapsedMs) || elapsedMs < 3000;

    if (isHoneypotFilled || isTooFast) {
      console.warn('Blocked suspected spam submission', { isHoneypotFilled, elapsedMs });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Quote request submitted successfully'
        })
      };
    }

    const template = generateEmailTemplate(formData, 'quoteRequest');

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: 'contact@epca.net.au',
      replyTo: formData.email,
      subject: template.subject,
      html: template.html,
      text: template.text
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
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Quote request submitted successfully',
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
