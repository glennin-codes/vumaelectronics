import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useCheckout } from "../../context/CheckOutContext";

export default function AddressForm() {
  const { state, dispatch } = useCheckout();
  const { shippingAddress } = state;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_SHIPPING_ADDRESS",
      payload: { [name]: value },
    });
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={shippingAddress.firstName}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={shippingAddress.lastName}
            autoComplete="family-name"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="phoneNumber"
            value={shippingAddress.phoneNumber}
            fullWidth
            autoComplete="phoneNumber"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="email"
            value={shippingAddress.email}
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City/town/county"
            fullWidth
            value={shippingAddress.city}
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            name="location"
            label="location/Area/sublocation/district"
            fullWidth
            value={shippingAddress.location}
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code of nearest prymary Sch."
            fullWidth
            value={shippingAddress.zip}
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={shippingAddress.country}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
