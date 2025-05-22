import mailchimp from '@mailchimp/mailchimp_marketing';
import axios from 'axios';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

async function verifyEmail(email) {
  const query = {
    url: 'https://mailcheck.p.rapidapi.com/',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
      'x-rapidapi-key': process.env.CHECKMAIL_API_KEY,
    },
    params: {
      'domain': email
    }
  }

  return await axios(query);
}

//: { email: string, name?: 'string'}
async function mailchimpSignup(data) {
  const subscriber = {
    email_address: data.email,
    status: 'subscribed',
    email_type: 'html'
  };

  const rejectEmailResponse = {
    status: 400,
    detail: 'Please include a valid email address.',
    errors: []
  };

  if (data.name || !data.email) {
    throw rejectEmailResponse;
  }

  try {
    const { valid, block } = await verifyEmail(data.email);
    if (!valid || block) throw new Error('Email failed verification.');
  } catch (error) {
    if (error.message === 'Email failed verification.') {
      throw rejectEmailResponse;
    } else {
      // Failure with verification API, capture email as usual
      console.error('Email verification failed, capturing signup.', error.response.data);
    }
  }

  if (!process.env.MAILCHIMP_LIST_ID) throw new Error('Environment Variables not correctly configured');

  try {
    const response = await mailchimp.lists.batchListMembers(process.env.MAILCHIMP_LIST_ID, {
      members: [subscriber],
    });

    if (response.new_members.length > 0) return true;
    if (response.errors[0].error_code === 'ERROR_CONTACT_EXISTS') throw { status: 422, detail: 'You are already subscribed!', errors: response.errors}
    throw { status: 400, detail: response.errors[0].error, errors: response.errors }
  } catch(error) {
    if (error.response) throw error.response.body;
    throw error;
  }
}

export default mailchimpSignup;
