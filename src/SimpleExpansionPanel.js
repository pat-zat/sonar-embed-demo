import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeBlock from './CodeBlock';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>01 JavaScript Includes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="flexcol">

          <Typography>Sonar Embed does require jQuery 3.3.0 or newer <a href="https://jquery.com/download/"> - Get jQuery</a></Typography>

            <div className="codeBlock">
              <CodeBlock language="html" codeString='<script src="//sonar-embedgen.seastarsolutions.com/bundles/vendorJS?v=H5LIetGRqyqhvOahmuxCKa3iRMhD4vdSOu_gEke1PQ1"></script>'></CodeBlock>
              <CodeBlock language="html" codeString='<script src="//sonar-embedgen.seastarsolutions.com/bundles/customJS?v=2YfbLLeWiELxBGBnrUGtWZibbjO9c5CsUcV_yGLeT8U1"></script>'></CodeBlock> 
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>02 CSS Includes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="flexcol">
          <div className="codeBlock">
            <CodeBlock language="html" codeString='<link href="//sonar-embedgen.seastarsolutions.com/Content/vendorCSS?v=fjTgsLt19MqjI1DWw-z0lnoO5IA6h9BIXVK95-NjscA1" rel="stylesheet"/>'></CodeBlock>
            <CodeBlock language="html" codeString='<link href="//sonar-embed-gen.seastarsolutions.com/Content/customCSS?v=w7m_ZYgi2W7VRN4jJo7hGl95K1GPjJHokF8_ui-5Zk1" rel="stylesheet"/>'></CodeBlock> 
          </div>
          <Typography>Include the following font reference:</Typography>
          <CodeBlock language="html" codeString='<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">'></CodeBlock> 
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>03 Display the Embed</Typography>
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="flexcol">
        <Typography> place a div tag with the “sonar-embed” class on the page where you want the parts finder to be displayed.</Typography>
          <CodeBlock language="html" codeString='<div class="sonar-embed"></div>'></CodeBlock>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}