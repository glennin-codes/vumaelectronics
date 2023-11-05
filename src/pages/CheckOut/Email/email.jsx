import React from "react";
import { urlFor } from "../../../lib/client";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

function EmailContent(props) {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    city,
    location,
    zip,
    country,
    phoneNumberMadePayement,
    cartItems,
    totalPrice,
    mpesaCode,
    totalQuantities,

  } = props;
console.log(
  totalPrice,
  cartItems
)
  return (
    <Html lang="en">
      <Text>Payment Or an order from a client</Text>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <p>Name: {`${firstName} ${lastName}`}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Phone Number Making Payment: {phoneNumberMadePayement}</p>
        <p>City/Town/County: {city}</p>
        <p>zip/Postal Code of Nearest Sch: {zip}</p>
        <p>Location: {location}</p>
        <p>Country: {country}</p>
<Text>
  orders
</Text>
        {/* Table displaying cart items */}
        <table cellPadding={0} cellSpacing={0} border={1} width="100%">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img
                height={80}
                width={50}
                
               src={urlFor(item.image[0]?.asset)}
               alt={item.name}
               />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total price */}
        <p>Total Price: {totalPrice} of {totalQuantities} </p>
        <Text>
           RE: payment validation or a message?
        </Text>
        <p>
            mpesaCode/message  : {mpesaCode}
        </p>
      </div>
    </Html>
  );
}

export default EmailContent;
