import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '0 20px'
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className="paperRow"> 
        <div><Typography variant="h3" component="h3" className="numbering">{props.num}</Typography></div>
        <div>
          <Typography variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography className="sub-par" component="p">
            {props.feature}    
          </Typography>
        </div>
      </div>
    </Paper>
  );
}