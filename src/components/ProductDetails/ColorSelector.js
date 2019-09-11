import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { changeProductVariant } from '../../actions';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  },
  label: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    top: -theme.spacing(4),
    left: '2px',
    textTransform: 'uppercase',
    color: '#4c4c4c'
  },
  focused: {
    color: '#4c4c4c!important'
  },
  input: {
    border: '1px solid #c7c7c7',
    padding: '4px 8px 4px 16px',
    borderRadius: '8px',
    minWidth: '160px'
  },
  icon: {
    right: theme.spacing(1)
  }
}));

function ColorSelector() {
  const classes = useStyles();
  const { variants } = useSelector(state => state.productDetails.data);
  const selectedVariant = useSelector(state => state.productDetails.selectedVariant);
  const dispatch = useDispatch();

  return (
    <FormControl className={classes.root}>
      <InputLabel classes={{ root: classes.label, focused: classes.focused }} htmlFor="color-select">Colors</InputLabel>
      <Select
        classes={{ icon: classes.icon }}
        value={selectedVariant}
        onChange={({ target: { value } }) => dispatch(changeProductVariant(value))}
        IconComponent={ExpandMore}
        input={<InputBase name="color" id="color-select" classes={{ root: classes.input }} />}
      >
        {variants.map(({ color }, index) => (
          <MenuItem key={index} value={index}>
            {color}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ColorSelector;
