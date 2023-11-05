import emailjs from "@emailjs/browser";
export function sendOrderConfirmationEmail(toEmail, htmlContent, toName) {
  const templateParams = {
    to_name: toName,
    from_name: "Spark Electronics",
    to_email: toEmail,
    message_html: htmlContent,
  };

  emailjs
    .send(
      "service_3c715xm",
      "template_fnhktf2",
      templateParams,
      "Azvo3h2aPLx56i-Mz"
    )
    .then((response) => {
      console.log("Email sent:", response);
    })
    .catch((error) => {
      console.error("Email error:", error);
    });
}
