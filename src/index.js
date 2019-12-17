
import React from "react";
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './style.css';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import StyledComponents from './StyledComponents';
import ClientLogo from './ClientLogo';
import PaperSheet from './PaperSheet';
import CodeBlock from './CodeBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ListDividers from './ListDividers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import vid from './img/sonarMkt.mp4';
import ButtonAppBar from './AppBar';
import SierraLogoW from './img/Sierra-logo-wht.png';
import SierraLogo from './img/sierra-logo.svg';
import {
   // priceStockCode,
   // addToCartCode,
    //oneItemCode,
    pickCode
  
} from './codeStrings.js';



//import $ from "jquery";
//import Lottie from 'react-lottie'
//import SonarSweep from '../lotties/sweep.json'
//import IconTabs from './IconTabs';

const code = `
    function InjectPriceAndStock() {
    $(".priceHolder").each(function (index) {
        //This sets the price.
        $(this).html("$13.99");
        //This will allow you to reference your SKU.
         $(this).data("sku");
    });

    $(".stockMessage").each(function (index) {
        //This sets the availability message.
        $(this).html("Ships when available.");
        //This will allow you to reference your SKU.
        $(this).data("sku");
    });
}`;




const App = () => {
    const useStyles = makeStyles(theme => ({
        root1: {
          width: '100%',
          maxWidth: 700,
          backgroundColor: theme.palette.background.paper,         
        },
      }));
      const classes = useStyles();

         

    return (
        <div className="ui">
            <ButtonAppBar></ButtonAppBar>
           
            
            <div className="ui container">

                

                <Typography className="sectionTitle" variant="h1" component="h2">Summary &amp; Features</Typography>
                <Typography className="summary bodypar" variant="body1">Sonar-Embed by <span><img className="SierraLogo" src={ SierraLogo } /></span> is a user friendly JavaScript-driven read-only application. It seamlessly embeds our Sierra catalog into your eccommerce platform. Items, engines, and diagrams can be searched and added to your eccommerce cart. Price and stock message injection and shopping cart handoff functions are included and are customized to fit your needs. The following documentation will provide you all the necessary code to get up and running as quickly and efficiently as possible. Containing all the required scripts and CSS links required for Sonar Embed to run properly within your application.
                </Typography>

               <div className="flexrow features">
                <PaperSheet num="01" title="SEARCH" feature="For Sierra Part Numbers, Models &amp; Engines, or OEM Numbers"></PaperSheet>
                <PaperSheet num="02" title="VIEW" feature="Part, model and engine information with diagrams and exploded views" ></PaperSheet>
                <PaperSheet num="03" title="CUSTOMIZE" feature="Price and stock injection, mapping and cross-reference, integration with your current eccommerce store" ></PaperSheet>
                <PaperSheet num="04" title="IMPLEMENT" feature="Simply include two scripts, reference CSS, and then call a JavaScript function" ></PaperSheet>
                </div>
                <br/>
                <br/>
               
                {/* <QierPlayer srcOrigin={ vid } /> */}
                <div className="vid" ><video className="video"  controls="controls" src={ vid }></video> </div>
                <br/>
                <br/>
                <Typography className="subTitle" style={{textAlign: 'center'}} variant="h1" component="h2">Live Embeds</Typography>
                <br/>
                <div className="row"> <ClientLogo></ClientLogo> </div>

                <hr/>

                <Typography className="sectionTitle" variant="h1" component="h2">Installation</Typography>
                    <Typography className="subTitle" variant="h3" component="h3">Customer ID</Typography>
                    <Typography className="summary bodypar">There is only 1 requirement to embed Sonar: a customer ID from Sierra for production. You can use 00000 for development.</Typography>
                    <Typography className="subTitle" variant="h3" component="h3">Product File Map (Sku Feed)</Typography>
                    <Typography className="bodypar" variant="body1">The file feed is used to <span className="emphasis">limit the parts that your customer’s can search for, to better match the products you sell</span>, as well as give you a way to add custom pricing and availability. 
                    </Typography>
                    <Typography className="summary bodypar">During development you will be provided access to an FTP/SFTP site. You can connect and upload a file named [YourCompany]_Sonar_sku_export.csv. You can update this file as often as you’d like and we will process it once a day and load it into our system. You may also use Microsoft Excel for the file format (.xlxs).
                    </Typography>
                    <Typography className="note"><span>Note:</span> If you want our full catalog, you do not need to do the File Feed.</Typography>
                    <hr/>
                
                    <div className="flexrow mapping">
                        <Typography style ={{ width: '30%' }} variant="h4" component="h4">Required Information to map your SKU’s to Sierra’s SKU's</Typography>
                        <Typography variant="h4" component="h4">=></Typography>
                        {/* <div className="arrow"></div> */}
                        <ListDividers style={{maxWidth: '460px'}}></ListDividers>
                    </div>
            
                    <hr/>
                    <Typography className="subTitle" variant="h3" component="h3">Includes</Typography>
                    
                    <SimpleExpansionPanel></SimpleExpansionPanel>
                    
                    <hr/>

                <Typography className="sectionTitle" variant="h1" component="h2">Initialization</Typography>
                    <Typography className="subTitle" variant="h3" component="h3">Initializing the Application</Typography>
                    <Typography className="bodypar">To initialize the parts finder you will call the InitializeSONAREmbed() method with the following parameters:</Typography>
                    
                   <div className="flexrow"> 
                       <List component="nav" className={classes.root1} aria-label="mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Type" />
                                 <ListItemText className="secondaryText" secondary="'production', 'stage'. This will control whether you hit our production or stagingsite (for testing)" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="PricingType" />
                                <ListItemText style={{marginLeft: '200px'}} secondary="'retail', 'pro'. This will control whether you want 'retail' or the 'pro' data subset from your custom file feed of searchable items" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="CustomerId" />
                                <ListItemText secondary="The CustomerId provided for you when you signup" />
                            </ListItem>                 
                        </List>
                        <CodeBlock language="javascript" codeString='$(document).ready(function () { InitializeSONAREmbed("production", "retail", "000000"); });'>
                         </CodeBlock>
                    </div>

                    <hr/>

                <Typography className="subTitle" variant="h3" component="h3">Production Vs Stage</Typography>
                    <Typography className="bodypar"><span className="emphasis">Production:</span> will point to the production ready copies of the Sonar Embed assets. </Typography>
                    <Typography className="bodypar"><span className="emphasis">Stage:</span> will point to the staged copies of the Sonar Embed assets. All new development will be available at Stage for you to test against prior to Go Live dates for Sonar Embed updates.
                    </Typography>

                    <hr/> 

                <Typography className="subTitle" variant="h3" component="h3">Displaying Custom Price and Stock</Typography>
                    <Typography className="bodypar">If you have your custom file feed setup, there are several events you can utilize to inject custom pricing or availability information into the display pages of the parts finder.</Typography>
                    <Typography className="bodypar">You can write a JavaScript function that will insert the price and stock similar to the example below.</Typography>


                <SyntaxHighlighter style={okaidia} language="javascript" wrapLines={true}>
                    {code}
                </SyntaxHighlighter>
                <Typography className="note"><span>Note:</span> Note: The pricing and stock message look-up will need to be done on your side. This just shows how you would inject your prices and stock messages into the application.</Typography> 
                <br/>
                <hr/>  

                <Typography className="sectionTitle" variant="h1" component="h2">Events</Typography>

                <Typography className="subTitle" variant="h4" component="h4">Event: A category is selected on an engine detail page. </Typography>  
                        <CodeBlock language="javascript" codeString='
                            $(".sonar-embed").on("SONAREmbed:EngineItemSectionLoaded", function () {
                                console.log("Engine Item Section Loaded");
                                InjectPriceAndStock();
                               });                               
                        '>
                         </CodeBlock>              
            
                <hr/> 


                <Typography className="subTitle" variant="h4" component="h4">Event: “Sierra Part #” search results are returned and loaded.</Typography>  
                    <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/>            


                <Typography className="subTitle" variant="h4" component="h4">Event: An Item Detail Page is loaded. </Typography>  
                    <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/>    


                <Typography className="subTitle" variant="h4" component="h4">Event: Parts List Page is loaded. </Typography>  
                    <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/>   

                <Typography className="subTitle" variant="h4" component="h4">Event: Engine (Model) Detail Page is loaded</Typography>  
                    <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/>   
{/* ---------------------------------------------------- */}

                <Typography className="subTitle" variant="h3" component="h3">Add to cart</Typography>
                <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/> 

                <Typography className="subTitle" variant="h3" component="h3">Add one item to cart</Typography>
                <CodeBlock language="javascript" codeString='$(".sonar-embed").on("SONAREmbed:SearchBySierraResultsLoaded", function () 
                    {
                        console.log("Search Results Loaded");
                        InjectPriceAndStock();
                    });
                    '>
                    </CodeBlock>
           
                <hr/>

                <Typography className="subTitle" variant="h3" component="h3">Add pick list contents to cart</Typography>
                <CodeBlock language="javascript" codeString={pickCode}>
                    </CodeBlock>
           
                <hr/>

                <Typography className="subTitle" variant="h3" component="h3">Add many items to cart</Typography>
                <CodeBlock language="javascript" codeString={code}>
                    </CodeBlock>
           
                <hr/>

                
                                
                {/* <div className="btn flexrow"><StyledComponents></StyledComponents></div> */}
                
                {/* <div className="tabRow flexrow"><IconTabs></IconTabs></div> */}
                
            </div>

        </div>

    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
//setTimeout(() => Prism.highlightAll(), 0)