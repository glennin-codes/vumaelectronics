import emailjs from '@emailjs/browser'

// ...

export const sendEmail = (htmlContent) => {
    console.log("sender",htmlContent)
  const templateParams = {
    to_name:"Manager Spark Electronics",
    from_name: 'Customer Spark Electronics', // Set the "from name" here
    to_email: 'sparkelectros@gmail.com',
    message_html: htmlContent,
   
  };

  emailjs
    .send('service_3c715xm', 'template_fnhktf2', templateParams, 'Azvo3h2aPLx56i-Mz')
    .then((response) => {
      console.log('Email sent:', response);
    })
    .catch((error) => {
      console.error('Email error:', error);
    });
};
