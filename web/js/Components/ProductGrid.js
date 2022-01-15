import React from "react";
import { Product } from "./Product";
import Grid from "@mui/material/Grid";

function ProductGrid(props) {
  const products = props.products;
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item lg={4} xs={6} key={product.sku}>
          <Product key={product.sku} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export { ProductGrid };
