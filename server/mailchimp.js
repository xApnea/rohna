import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

//: { email: string, name?: 'string'}
async function mailchimpSignup(data) {
  const subscriber = {
    email_address: data.email,
    status: 'subscribed',
    email_type: 'html'
  };

  if (data.name || !data.email) {
    throw {
      status: 400,
      detail: 'Please include a valid email address.',
      errors: []
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
