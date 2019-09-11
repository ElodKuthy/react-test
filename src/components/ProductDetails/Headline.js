import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(6)
  },
  subtitle: {
    marginTop: theme.spacing(1)
  }
}));

function Headline() {
  const classes = useStyles();
  const {
    name,
    headline
  } = useSelector(state => state.productDetails.data);

  return (
    <Fragment>
      <Typography variant="h1" className={classes.title}>{name}</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>{headline}</Typography>
    </Fragment>
  );
}

export default Headline;
