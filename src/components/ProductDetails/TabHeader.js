import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { changeProductDetailsTab } from '../../actions';

const useStyles = makeStyles(theme => ({
  tabs: {
    marginTop: theme.spacing(6)
  }
}));

function TabHeader() {
  const classes = useStyles();
  const selectedTab = useSelector(state => state.productDetails.selectedTab);
  const dispatch = useDispatch();

  return (
    <Tabs indicatorColor="primary" className={classes.tabs} value={selectedTab}
      onChange={(_,  selectedTab) => dispatch(changeProductDetailsTab(selectedTab))}>
      <Tab label="Description" />
      <Tab label="Details" />
    </Tabs>
  );
}

export default TabHeader;
