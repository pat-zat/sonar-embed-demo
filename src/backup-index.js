//import React from 'react';
import React from "react";
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './style.css';
import $ from "jquery";
import Lottie from 'react-lottie'
//import SonarSweep from '../lotties/sweep.json'
import IconTabs from './IconTabs';
//import HorizontalLabelPositionBelowStepper from './Stepper.js';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import StyledComponents from './StyledComponents';
//import ImageGridList from './ImageGridList';
//import SingleLineGridList from './SingleLineGridList';
import ClientLogo from './ClientLogo';
//import ListDividers from './ListDividers';
import PaperSheet from './PaperSheet';
//import MiddleDividers from './MiddleDividers';

// class App1 extends Component {
// componentDidMount() {
//     $("button").click(function() {
//         $(".clientLogos").hide();
//     });
//   }
// }
const App = () => {


        $("button").click(function() {
            console.log("clicked");
        });
      

    return (
        <div className="ui">
            <div className="ui container">

                <div>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1444 1052.75">
                    <g fill="#25333f">
                         <path d="M318.9 628.05a142.26 142.26 0 01-25.35-2.25 124.91 124.91 0 01-23.25-6.45 95.56 95.56 0 01-19.2-9.89l2.1-11.41a103.61 103.61 0 0030.15 14.11 123.68 123.68 0 0035.25 5.09q30 0 47.25-13.34t17.25-36.16A50.81 50.81 0 00380 549a36.64 36.64 0 00-10.8-14.4q-7.65-6.44-21.45-12.6t-35.1-13.34q-19.5-6.6-32.1-15.31t-18.6-20.1a54.51 54.51 0 01-6-25.79q0-17.4 8.4-30.16T288 397.5q15.3-7 36.3-7a140.21 140.21 0 0131.5 3.59 126.76 126.76 0 0129.1 10.5l-2.7 10.5a137.49 137.49 0 00-28.65-10.34 126.39 126.39 0 00-29.25-3.46q-26.4 0-41.55 12t-15.15 33.3q0 12.92 4.95 22.05t16.8 16.2q11.85 7.06 32.55 14.25 27.6 9.31 43.65 18.75t22.8 21.16q6.75 11.68 6.75 27.89 0 18.92-9.3 32.56t-26.4 21.14q-17.1 7.46-40.5 7.46zM617.4 628.05a115.3 115.3 0 01-45.4-8.84 108.75 108.75 0 01-36.3-24.91 114.29 114.29 0 01-24-37.64 126.9 126.9 0 01-8.55-47.11q0-25.79 8.55-47.39a116.09 116.09 0 0124-37.81 107.59 107.59 0 0136.4-25.05 116.39 116.39 0 0145.6-8.84 114.52 114.52 0 0145.15 8.84 109 109 0 0136.3 24.91 114 114 0 0124 37.79 134.83 134.83 0 010 94.5 113.77 113.77 0 01-24 37.8 108.75 108.75 0 01-36.3 24.91 115.3 115.3 0 01-45.45 8.84zm0-11.7a102 102 0 0040.5-7.94 96.38 96.38 0 0032.4-22.5 104.17 104.17 0 0021.45-34.06 114.73 114.73 0 007.65-42.3 116.91 116.91 0 00-7.65-42.75 104.07 104.07 0 00-21.45-34.2 96.66 96.66 0 00-32.4-22.5 107.26 107.26 0 00-81 0 96.66 96.66 0 00-32.4 22.5 104.71 104.71 0 00-21.45 33.9 114.57 114.57 0 00-7.65 42.5 116.83 116.83 0 007.65 42.75 103.86 103.86 0 0021.45 34.2 96.38 96.38 0 0032.4 22.5 102 102 0 0040.5 7.9zM856.2 623.25v-228h12.3l167.7 218.41h-5.7V395.25h11.7v228h-12.3L862.8 405.46h5.1v217.79zM1152.6 623.25l93.9-228h13.5l94.2 228h-13.5l-90-222h4.8l-90.3 222zm37.5-75.59l4.8-10.81h116.7l4.5 10.81zM1464.6 623.25v-228h60.3q22.2 0 38.55 7.8a59.23 59.23 0 0125.35 22.2q9 14.4 9 33.91 0 16.2-5.55 28.64a54.26 54.26 0 01-15.9 20.7 73.19 73.19 0 01-24.45 12.6 105.17 105.17 0 01-31.2 4.36h-48.6v-11.41h46.8q32.1 0 49.2-13.95t17.1-40.05q0-25.49-16-39.45t-45.2-13.94h-53.4l6-8.41v225zm139.8 0l-67.2-104.4h13.5l68.4 104.4z" transform="translate(-238 -14.09)"/>
                    </g>
                    <circle cx="722" cy="526.38" r="526" fill="none" stroke="#ff851b" stroke-miterlimit="10" stroke-width=".75"/>
                    <path fill="none" stroke="#333" stroke-miterlimit="10" stroke-width=".5" d="M0 608.88h1444"/>
                </svg>
                </div>
                
                <div className="row"> <ClientLogo></ClientLogo> </div>

                <Typography className="sectionTitle" variant="h1" component="h2">Summary &amp; Features</Typography>
                <Typography variant="body1">A user friendly JavaScript-driven read-only application. It allows customers to
                    view information pertaining to items, engines, and diagrams found within our Sierra catalog.
                    Price and stock message injection and shopping cart handoff functions are included and are
                    customized to fit your needs. This document will provide you all the necessary code to get up
                    and running as quickly and efficiently as possible. Containing all the required scripts and CSS
                    links required for Sonar Embed to run properly within your application.
                </Typography>

               <div className="flexrow summary">
                {/* <ListDividers></ListDividers> */}
                <PaperSheet></PaperSheet>
                <PaperSheet></PaperSheet>
                <PaperSheet></PaperSheet>
                <PaperSheet></PaperSheet>
                </div>
                {/* <Button variant="contained" color="primary">
                    Hello World
                </Button> */}
            

                
                {/* <div className="flexrow"><HorizontalLabelPositionBelowStepper></HorizontalLabelPositionBelowStepper></div> */}
                
                <Typography className="sectionTitle" variant="h1" component="h2">Installation</Typography>
                <SimpleExpansionPanel></SimpleExpansionPanel>

                <Typography className="sectionTitle" variant="h1" component="h2">Initialization</Typography>

                <Typography className="sectionTitle" variant="h1" component="h2">Customization</Typography>

                <div className="btn flexrow"><StyledComponents></StyledComponents></div>
                
                <div className="tabRow flexrow"><IconTabs></IconTabs></div>
         
                {/* <ImageGridList></ImageGridList> */}
                {/* <SingleLineGridList></SingleLineGridList> */}

                
            </div>
            
           
        </div>

    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);