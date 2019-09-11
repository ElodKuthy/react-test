import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    borderColor: {
      borderColor: '#f2f2f2', // Material UI system borderColor prop does not play nice wuth borderBottom
    }
});

function Section({ last, children }) {
  const classes = useStyles();
  return (
    <Box pt={{ xs: 2, md: 4}} pl={{ xs: 2, md: 8 }} pr={{ xs: 2, md: 8 }} borderBottom={last ? 0 : 1} className={classes.borderColor}>
      {children}
    </Box>
  );
}

Section.propTypes = {
  last: PropTypes.bool,
  children: PropTypes.node
};

export default Section;