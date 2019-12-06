// filename uses capital letters
import React from 'react';
import image from './img/lorenz.png';
import image1 from './img/kimpex.png';
import image2 from './img/nu.jpg';
import image3 from './img/medart.png';
import image4 from './img/iboats.png';
import image5 from './img/CCmarine.png';
import image6 from './img/overtons.png';
import image7 from './img/wm.png';
import image8 from './img/lfs.png';
import image9 from './img/jerrys.png';
import SimpleCard from './SimpleCard';

//access prop provided to component => which was provided IN the parent component called "App"
//prop shows up inside an object that will be provided as an argument to the component function
const ClientLogo = () => {
    //console.log(props);
    return (     
    <div className="LogoCon flexcol">
      <div className="clientLogos">
        <div className="clientLogo"><a href="https://www.go2marine.com/boat-engine-finder-tool"><img src={ image8 } alt="LFS Marine" /></a></div>   
        <div className="clientLogo"><a href="https://nuwavemarine.com/sonar-parts/"><img src={ image2 } alt="NuWave Marine" /></a></div>     
        <div className="clientLogo"><a href="https://www.overtons.com/engine-parts-tool"><img src={ image6 } /></a></div> 
        <div className="clientLogo"><a href="https://www.westmarine.com/engine-parts-selector"><img src={ image7 } /></a></div>
        <div className="clientLogo"><a href="http://www.lorenzandjones.com/default.aspx?page=Customer&file=customer/lojoma/customerpages/Blankpage.htm"><img src={ image } /></a></div> 
      </div>    
      <br/>

      <div className="flexrow internal">
        <div className="clientLogo"><a href="https://www.kimpex.com/"><img src={ image1 } /></a></div>
        <div className="clientLogo"><a href=""><img src={ image3 } alt="Medart Marine" /></a></div> 
        <div className="clientLogo"><a href=""><img src={ image4 } alt="iBoats" /></a></div> 
        <div className="clientLogo"><a href=""><img src={ image5 } alt="CC Marine" /></a></div> 
        <div className="clientLogo"><a href=""><img src={ image9 } alt="Jerrys Marine" /></a></div>
      </div>
    </div>
    
     
  
    // <div className="clientLogos internal"></div>
      
    
    

    );
};

export default ClientLogo;