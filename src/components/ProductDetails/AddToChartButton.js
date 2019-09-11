import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { startAddToCart, completeAddToCart } from '../../actions';

const useStyles = makeStyles(theme => ({
  button: {
    width: '240px',
    height: '60px',
    marginBottom: theme.spacing(6)
  }
}));

function AddToChartButton() {
  const classes = useStyles();
  const isLoading = useSelector(state => state.productDetails.isLoading);
  const addedToCart = useSelector(state => state.productDetails.addedToCart);
  const dispatch = useDispatch();

  const onClick = () => {
    if (!isLoading && !addedToCart) {
      dispatch(startAddToCart());
      setTimeout(() => dispatch(completeAddToCart()), 2000);
    }
  }

  return (
    <Button color="primary" variant="contained" className={classes.button} onClick={onClick} disabled={isLoading}>
      {addedToCart ? 'View Cart' : isLoading ? 'Loading...' : 'Add to chart'}
    </Button>
  );
}

export default AddToChartButton;
