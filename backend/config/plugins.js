// // import sgMail from "@sendgrid/mail";
// const sgMail = require("@sendgrid/mail")


// const setupClient = async () => {
//   // client.setApiKey(process.env.SENDGRID_API_KEY || "");
//   sgMail.setApiKey('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');
// };

//  const subscriptionConfirmationMail = async (
//   userEmail,
//   userName,
// ) => {
//   setupClient();
//   const templateId = "d-8a9343e5664a4a0d861f368336f12bca";
//   // const templateId = "d-7c449ab46a4b4c2ca5af8a93806857a4";
//   const subject = "It's official! You're now a part of the World of WeWork";
//   const msg = {
//     from: 'shedagenishant33@gmail.com',
//     templateId,
//     personalizations: [
//       {
//         to: userEmail,
//         dynamic_template_data: {
//           subject,
//           userName,
//         },
//       },
//     ],
//   };
//   console.log(msg);
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       console.error(error.response.body.errors);
//     });
// };

// subscriptionConfirmationMail('shedagenishant40@gmail.com','nishant')


// module.exports = ({ env }) => ({
//   email: {
//     provider: 'sendgrid',
//     providerOptions: {
//       host:'smtp.sendgrid.net',
//       apiKey: env('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'),
//       port:'465',
//       username:'apikey',
//       password:'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'
//     },
//     settings: {
//       defaultFrom: 'shedagenishant33@gmail.com',
//       defaultReplyTo: 'shedagenishant33@gmail.com',
//     },
//   },
// });


// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: 'sendgrid',
//       providerOptions: {
//         host: 'smtp.sendgrid.net', //SMTP Host
//         port: '465'   , //SMTP Port
//         secure: true,
//         username: 'apikey',
//         password: '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',
//         rejectUnauthorized: true,
//         requireTLS: true,
//         connectionTimeout: 1,
//       },
//     },
//     settings: {
//       defaultFrom: 'shedagenishant33@gmail.com',
//       defaultReplyTo: 'shedagenishant33@gmail.com',
//     }, 
//   },    
// });




//Working

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'smtp.gmail.com', //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: 'shedagenishant33@gmail.com',
        password: 'dpufqezieobmcjft',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: 'shedagenishant33@gmail.com',
      defaultReplyTo: 'shedagenishant33@gmail.com',
    }, 
  },    
});


// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
// const msg = {
//   to: 'shedagenishant40@gmail.com',
//   from: 'shedagenishant33@gmail.com', // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//     console.log("Send",msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();



// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey('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')
// const msg = {
//   to: 'shedagenishant40@gmail.com', // Change to your recipient
//   from: 'shedagenishant33@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })