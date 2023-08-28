'use server'
const client = require('@sendgrid/client')
client.setApiKey(process.env.SENDGRID_API_KEY)


const addContactToNewsletter = async (email) => {
  const data = {
    list_ids: [process.env.SENDGRID_LIST_ID],
    contacts: [
      {
        email: email,
      },
    ],
  }

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: data,
  }

  client
    .request(request)
    .then(([response, body]) => {
      if (response.statusCode === 202) {
        //subscribeToNewsletter(email)
        console.log('response_statusCode:', response.statusCode)
        console.log('Ressponse_body:', response.body)

        return response.statusCode
      } else {
        console.log('response_statusCode:', response.statusCode)
        console.log('Ressponse_body:', response.body)
        return response.statusCode
      }
    })
    .catch((error) => {
      console.error('ERROR:', error)
      return error
    })
}

async function subscribe(email) {
  try {
    await addContactToNewsletter(email)

    return { success: true, message: 'Successfully subscribed!' }
  } catch (error) {
    return { success: false, message: 'There was an error. Please try again.' }
  }
}

export default subscribe
