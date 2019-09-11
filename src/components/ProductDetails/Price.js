import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
  },
  discountPrice: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textDecoration: 'line-through',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    color: '#d1d1d1'
  }
}));

function Price() {
  const classes = useStyles();
  const {
    price,
    discountPrice
  } = useSelector(state => state.productDetails.data);

  return (
    <Grid container>
      <Typography variant="body1" className={classes.price}>
        {discountPrice || price}
      </Typography>
      {discountPrice && (
        <Typography variant="body1" className={classes.discountPrice}>
          {price}
        </Typography>
      )}
    </Grid>
  );
}

export default Price;
