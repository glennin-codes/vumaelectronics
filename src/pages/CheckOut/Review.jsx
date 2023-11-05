import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box, Card, Input, TextField } from "@mui/material";
import { useStateContext } from "../../context/StateContext";
import formatPriceWithCommas from "../ProductDetails/HelperPrice";
import { useCheckout } from "../../context/CheckOutContext";
import { Textarea } from "@chakra-ui/react";




export default function Review() {
  const {
    totalPrice,
    cartItems,
  } = useStateContext();

  const { state: checkoutData } = useCheckout();

  const { dispatch } = useCheckout();
  const backgroundImageUrl =
    "https://www.safaricom.co.ke/images/MicrosoftTeams-image.jpg/";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_SHIPPING_ADDRESS",
      payload: { [name]: value },
    });
  }

  const { shippingAddress } = checkoutData;
  const addresses = [shippingAddress.city, shippingAddress.location, shippingAddress.zip, shippingAddress.country];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Box
        sx={{
          py: 2,
          px: 0,
        }}
      >
        <Card
          sx={{
            height: "100%",
            maxHeight: 200,
            backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", color: "green", fontWeight: 700 }}
          >
            PayBill No: 247247 <br />
            ACCOUNT: 12356
          </Typography>
        </Card>
      </Box>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.brand} />
            <Typography variant="body2">
              Ksh {formatPriceWithCommas(product.price)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Ksh {formatPriceWithCommas(totalPrice)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{shippingAddress.firstaName}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <TextField
               
                required
                id="NumberMadePayment"
                name="number"
                label="Phone Number Making Payment"
                fullWidth
              value={shippingAddress.number}
                placeholder="07"
                autoComplete="Phone Number"
                variant="standard"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ py: 2 }}>
              <label htmlFor="text area"> Mpesa code</label>
              <Textarea
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",

                  width: "100%",
                  height: {
                    base: "100px",
                    md: "100px",
                    lg: "130px",
                  },
                  resize: "none",
                }}
                placeholder="paste here the mpesa code statement to validate your payment,or  send a message requesting to pay after a delivery"
                id="mpesaCode"
                name="mpesaCode"
                value={shippingAddress.mpesaCode}
                onChange={handleInputChange}
              ></Textarea>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
