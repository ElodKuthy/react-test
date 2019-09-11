import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  description: {
    marginTop: theme.spacing(2)
  }
}));

function TabHeader() {
  const classes = useStyles();
  const {
    description,
    details
  } = useSelector(state => state.productDetails.data);
  const selectedTab = useSelector(state => state.productDetails.selectedTab);

  return (
    <Fragment>
      <Typography variant="body1" className={classes.text} hidden={selectedTab !== 0}>
        {description}
      </Typography>
      <Typography variant="body1" className={classes.text} hidden={selectedTab !== 1}>
        {details}
      </Typography>
    </Fragment>
  );
}

export default TabHeader;
