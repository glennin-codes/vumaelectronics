import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./Address";

import Review from "./Review";
import { useStateContext } from "../../context/StateContext";

import sendgrid from "@sendgrid/mail";
import { useCheckout } from "../../context/CheckOutContext";

import { render } from "@react-email/render";

import { sendEmail } from "./Email/sendEmail";
import EmailContent from "./Email/email";

import { sendOrderConfirmationEmail } from "./Email/Recipient/SendCustomerEmail";
import { CustomerEmail } from "./Email/Recipient/customerEmail";

function Copyright() {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="www.mushan.tech">
        Spark Electronics
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;

    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [emailStatus, setEmailStatus] = React.useState(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
  } = useStateContext();
  const { state: checkoutData } = useCheckout();
  const { shippingAddress } = checkoutData;
  function generateOrderNumber() {
    const orderNumber = Math.floor(Math.random() * 9000000) + 1000000;

    return orderNumber;
  }
  const orderNumber = generateOrderNumber();
  const orderConfirmationText = `Your order number is #${orderNumber}. We have emailed your order confirmation, and will send you an update when your order has shipped.`;
 
  const contentEmail = render(
    <EmailContent
      firstName={shippingAddress.firstName}
      lastName={shippingAddress.lastName}
      phoneNumber={shippingAddress.phoneNumber}
      email={shippingAddress.email}
      city={shippingAddress.city}
      location={shippingAddress.location}
      zip={shippingAddress.zip}
      country={shippingAddress.country}
      phoneNumberMadePayement={shippingAddress.number}
      mpesaCode={shippingAddress.mpesaCode}
      cartItems={cartItems}
      totalPrice={totalPrice}
      totalQuantities={totalQuantities}
    />,
    {
      pretty: true,
    }
  );


const customerConfirmationEmail=render(
  <CustomerEmail orderNumber={orderNumber}  />
)
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      sendEmail(contentEmail);
      sendOrderConfirmationEmail(shippingAddress.email,customerConfirmationEmail,shippingAddress.firstName)
    }
  };
 const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Spark Electronics
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                {orderConfirmationText}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, color: "blue" }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
