import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

export default function ProductDetails() {
  const {
    name,
    headline,
    description,
    details,
    price,
    discountPrice,
    variants
  } = useSelector(state => state.productDetails.data);
  const selectedTab = useSelector(state => state.productDetails.selectedTab);
  const selectedVariant = useSelector(state => state.productDetails.selectedVariant);

  return (
    <Grid container>
      {name}
      {headline}
      {description}
      {details}
      {price}
      {discountPrice}
      {JSON.stringify(variants)}
      {selectedTab}
      {selectedVariant}
    </Grid>
  );
}
