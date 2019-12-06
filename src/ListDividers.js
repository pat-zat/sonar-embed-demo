import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Your SKU" />
        <ListItemText secondary="In your system for your products" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Sierra's SKU" />
        <ListItemText secondary="In our system for our products" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Is Retail" />
        <ListItemText secondary="Boolean, makes the line-item searchable in Retail configuration" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Is Pro" />
        <ListItemText secondary="Boolean, makes the line-item searchable in Pro/OEM configuration" />
      </ListItem>
    </List>
  );
}