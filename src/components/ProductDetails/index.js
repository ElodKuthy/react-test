import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Section from './Section';
import Navigation from './Navigation';
import Headline from './Headline';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1400,
    margin: 'auto',
    marginTop: theme.spacing(10)
  },
  leftBorder: {
    borderLeft: '1px solid #f2f2f2'
  }
}));

export default function ProductDetails() {
  const classes = useStyles();
  const {
    price,
    discountPrice,
    variants
  } = useSelector(state => state.productDetails.data);
  const selectedTab = useSelector(state => state.productDetails.selectedTab);
  const selectedVariant = useSelector(state => state.productDetails.selectedVariant);

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
            <Section>
              <Navigation />
              <Headline />
              <TabHeader />
            </Section>
            <Section>
              <TabContent />
            {price}
            {discountPrice}
            {JSON.stringify(variants)}
            {selectedTab}
            {selectedVariant}
            </Section>
            <Section last>

            </Section>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.leftBorder} item xs={12} md={6}>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );
}
