import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
  }
}));

function ProductImage() {
  const classes = useStyles();
  const {
    name,
    variants
  } = useSelector(state => state.productDetails.data);
  const selectedVariant = useSelector(state => state.productDetails.selectedVariant);

  return (
    <img className={classes.img} src={variants[selectedVariant].img} alt={name} />
  );
}

export default ProductImage;
