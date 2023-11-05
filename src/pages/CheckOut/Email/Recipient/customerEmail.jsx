import { Html} from "@react-email/html";

export const CustomerEmail = ({ orderNumber }) => {
  return (
    <Html lang="en">
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
            }
            .container {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
              font-size: 24px;
            }
            p {
              color: #555;
              font-size: 16px;
            }
            .order-number {
              color: #ff6600;
              font-size: 20px;
              font-weight: bold;
            }
          `}
        </style>
      </head>
      <body>
        <container className="container">
          <h1>Dear Valued Customer,</h1>
          <p>We wanted to personally thank you for choosing Spark Electronics for your recent purchase!</p>
          <p>Your order is important to us, and we're excited to let you know that your order has been successfully placed.</p>
          <p>Your Order Number is: <span className="order-number">#{orderNumber}</span></p>
          <p>Now, all you have to do is sit back, relax, and wait for your amazing products to arrive at your doorstep.</p>
          <p>Our dedicated team is working diligently to process your order and get it ready for shipping. We'll notify you as soon as your order ships, so keep an eye on your inbox for further updates.</p>
          <p>If you have any questions or need assistance with your order, feel free to contact our friendly customer support team at <a href="mailto:support@spark-electronics.com">support@spark-electronics.com</a>. We're here to help!</p>
          <p>Thank you for choosing Spark Electronics. We appreciate your trust in us!</p>
          <p>Best Regards,<br />The Spark Electronics Team</p>
        </container>
      </body>
    </Html>
  );
};

