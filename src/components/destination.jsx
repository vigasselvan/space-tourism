import React, {useState} from 'react'
import Nav  from "./nav";
import data from '../data.json';
import bgImg from '../assets/destination/background-destination-desktop.jpg';import moonImg from "../assets/destination/image-moon.webp";
import marsImg from "../assets/destination/image-mars.webp";
import europaImg from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";

//since images not placed in /public, the images aren't bundled defaultly. 
//Therefore, we need to import, since imported it'll be bundled, and we can use.

const imageMap = {
  Moon: moonImg,
  Mars: marsImg,
  Europa: europaImg,
  Titan: titanImg,
};


export default function destination() {
    const [value, setvalue] = useState(0);
    const destinationName = ["Moon","Mars","Titan","Europa"]; // Replace with your logic
  
    // Findind the selected destination from the data
    const selectedDestination = data.destinations.find(
      (destination) => destination.name.toLowerCase() === destinationName[value].toLowerCase()
    );
  
    const currImg = selectedDestination.images.webp;

    return( 
        <>

        <div className="destPage" style={{backgroundImage: `url(${bgImg})`}}>
            <Nav />
            <div className="destCont">
                <div className="leftArea">
                    <h3><span style={{opacity: 0.5}}>01</span> PICK YOUR DESTINATION</h3>
                    <img src={imageMap[selectedDestination.name]} alt={selectedDestination.name} />
                </div>
                <div className="rightArea">

                    <div className="destList">
                    {
                        destinationName.map((destination, index) => (
                            <p
                            key={index}
                            onClick={() => {
                                setvalue(index);
                                
                                const currentElement = document.querySelector('.destList p:nth-child(' + (index + 1) + ')');
                                currentElement.classList.add('selected');
                            }}
                            className={index === value ? 'selected' : ''}
                            >{destination}</p>
                        ))
                    }
                    </div>   
                    <h1 className="destName">{selectedDestination.name}</h1>
                    <p className="destDesc">{selectedDestination.description}</p>
                    <hr className="destHr"></hr>
                    <div className="destStat">
                        <div className="avgDist">
                            <img src={currImg} alt={selectedDestination.name} />
                            <p style={{opacity: 0.5}}>AVG. DISTANCE</p>
                            <h1 className="distDest">{selectedDestination.distance}</h1>
                        </div>
                        <div className="timeDist">
                            <p style={{opacity: 0.5}}>EST. TRAVEL TIME</p>
                            <h1 className="timeDest">{selectedDestination.travel}</h1>
                        </div>
                    </div>

                </div>     
            </div>
            
        </div>   
        </> 
    );
}
