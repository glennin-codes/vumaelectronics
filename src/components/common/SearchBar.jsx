import React, { useState } from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { urlFor } from "../../lib/client";
import { Link } from "react-router-dom";

function ProductSearch({ filteredProducts, searchQuery, setSearchQuery }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: 250,

        flex: 1,
        borderRadius: "4px",
        width: {
          xl: 500,
          sm: 200,
          md: 300,
          xs: 200,
        },
        padding: 0,
        zIndex: 1,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <SearchIcon
          color="disabled"
          sx={{
            position: "absolute",
            pointerEvents: "none",
            marginLeft: "10px", // Adjust the icon's position as needed
          }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          style={{
            color: "black",
            padding: "10px", // Add some padding to align with the icon
            paddingLeft: "35px", // Leave space for the icon
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      {filteredProducts.length > 0 && (
        <List
          sx={{
            position: "absolute", // Set the position to absolute
            top: { xs: 50, md: 65 }, // Position the list below the input
            left: { xs: "-80%", md: "-20%" }, // Align the list with the input
            width: { xs: "260%", md: "150%" }, // Match the width of the input
            maxHeight: 250, // Set a maximum height
            overflow: "auto",
            // Enable vertical scrolling if needed
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent background
            borderBottom: "1px solid grey",
            borderRight: "1px solid grey",
            borderRadius: ".2rem",
            boxShadow: theme.shadows[1],
            color: "red",
            padding: "1rem",
          }}
        >
          {filteredProducts.map((product) => (
            <ListItem
              key={product._id}
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "",
                border: "1px solid brown",
                borderRadius: ".8rem",
                marginBottom: "1rem",
              }}
            >
              <ListItemAvatar
                sx={{
                  marginRight: 0,
                  padding: 0,
                }}
              >
                <Avatar
                  alt={product.category}
                  src={urlFor(product.image?.[0].asset)}
                  sx={{
                    width: {
                      xs: 20,
                      sm: 25,
                      md: 30,
                      lg: 40,
                    },
                    height: {
                      xs: 20,
                      sm: 25,
                      md: 30,
                      lg: 40,
                    },
                    marginRight: 0,
                    padding: 0,
                  }} // Adjust avatar size
                />
              </ListItemAvatar>
              <Link
                to={`/explore/products?q=${encodeURIComponent(product.name)}`}
                component="button"
                variant="body1"
                color="" // Customize the color
                underline="none"
                onClick={() => {
                  setSearchQuery("");
                }}
                // Add space between the links
              >
                {product.name}
              </Link>
              <Link
                to={`/explore/products?q=${encodeURIComponent(product.brand)}`}
                component="button"
                variant="body1"
                color="secondary" // Customize the color
                underline="none"
                onClick={() => {
                  setSearchQuery("");
                }}
              >
                <i> -from {product.brand}</i>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default ProductSearch;
