import React from 'react';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label: {
    color: '#4e4e4e',
    textTransform: 'none'
  },
  backIcon: {
    color: '#ebebeb',
    marginRight: theme.spacing(1)
  }
}));

function Navigation() {
  const classes = useStyles();
  return (
    <Button classes={{ label: classes.label }}>
    <KeyboardBackspace className={classes.backIcon} />
      All products
    </Button>
  );
}

export default Navigation;
