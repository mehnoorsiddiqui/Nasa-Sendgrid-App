const { ApiError, Client, MailSendController } = require('twilio-sendgrid-v-3-apilib');
require('dotenv').config({ path: 'sendgrid.env' })

const client = new Client({
    timeout: 0,
    accessToken: process.env.SENDGRID_API_KEY,
})
const mailSendController = new MailSendController(client);


const mailSend = async (emailTo) => {

    const body = {
        personalizations: [
            {
                to: [
                    {
                        email: emailTo,
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
                // value: '<html><body><img src=\"cid:myimagecid\"/></body></html>'
                value: '<html><body>hello there</body></html>'

            }
        ],
        // attachments: [
        //     {
        //         content: base64Img,
        //         type: 'image/png',
        //         filename: 'earth.png',
        //         disposition: 'inline',
        //         contentId: 'myimagecid'
        //     }
        // ]
    };
    try {
        const { result, ...httpResponse } = await mailSendController.pOSTMailSend(body);
        console.log('email sent')
        return "email sent"
    } catch (error) {
        console.log(error)
        if (error instanceof ApiError) {
            const errors = error.result;

        }
    }
}

// module.exports = mailSend;
mailSend("mehnoorsiddiqui9@gmail.com")