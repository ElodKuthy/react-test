import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Section from './Section';
import Navigation from './Navigation';
import Headline from './Headline';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import Price from './Price';
import ColorSelector from './ColorSelector';
import ProductImage from './ProductImage';
import AddToChartButton from './AddToChartButton';

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
              <Hidden mdUp>
                <ProductImage />
              </Hidden>
              <Price />
              <ColorSelector />
            </Section>
            <Section last>
              <AddToChartButton />
            </Section>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.leftBorder} item xs={12} md={6}>
            <ProductImage />
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );
}
