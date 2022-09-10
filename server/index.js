const { ApiError, Client, MailSendController } = require('twilio-sendgrid-v-3-apilib');
require('dotenv').config()

const client = new Client({
    timeout: 0,
    accessToken: process.env.SENDGRID_API_KEY,
})
const mailSendController = new MailSendController(client);


const body = {
    personalizations: [
        {
            to: [
                {
                    email: 'mehnoorsiddiqui9@gmail.com',
                    name: 'Mehnoor Siddiqui'
                }
            ],
        }
    ],
    from: {
        email: 'mahnoor.siddiqui@apimatic.io',
        name: 'Mahnoor'
    },
    subject: 'Test email from APIMatic ',
    content: [
        {
            type: 'text/html',
            value: '<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>',
        }
    ],
};

const mailSend = async () => {
    try {
        const { result, ...httpResponse } = await mailSendController.pOSTMailSend(body);
        console.log('email sent')
    } catch (error) {
        if (error instanceof ApiError) {
            const errors = error.result;
            
        }
    }
}
mailSend();