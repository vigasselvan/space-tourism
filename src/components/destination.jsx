import React, {useState} from 'react'
import Nav  from "./nav";
import data from '../assets/data.json';
import bgImg from '../assets/destination/background-destination-desktop.jpg';

export default function destination() {
    const [value, setvalue] = useState(0);
    const destinationName = ["Moon","Mars","Titan","Europa"]; // Replace with your logic
  
    // Findind the selected destination from the data
    const selectedDestination = data.destinations.find(
      (destination) => destination.name.toLowerCase() === destinationName[value].toLowerCase()
    );
  

    return( 
        <>

        <div className="destPage" style={{backgroundImage: `url(${bgImg})`}}>
            <Nav />
            <div className="destCont">
                <div className="leftArea">
                    <h3><span style={{opacity: 0.5}}>01</span> PICK YOUR DESTINATION</h3>
                    <img src={selectedDestination.images.webp} alt={selectedDestination.name} />
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
