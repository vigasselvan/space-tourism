import React, {useState} from "react";
import Nav  from "./nav";
import data from "../assets/data.json";
import bgImg from "../assets/technology/background-technology-desktop.jpg";

export default function Technology() {
  const [value, setvalue] = useState(0);
    const techName = ["Launch vehicle", "Spaceport","Space capsule"]; 

    // Findind the selected destination from the data
    const selectedTech = data.technology.find(
      (tech) => tech.name.toLowerCase() === techName[value].toLowerCase()
    );
    
    return(
        <>
            <div style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
                <Nav />
                <div className="techCont">
                    <div className="leftAreaTech">
                    
                        <div className="buttonCollTech">
                                <button className="buttonTech" onClick={()=>{
                                    setvalue(0)
                                }}>1</button>
                                <button className="buttonTech" onClick={()=>{
                                    setvalue(1)
                                }}>2</button>
                                <button className="buttonTech" onClick={()=>{
                                    setvalue(2)
                                }}>3</button>
                        </div>
                        <div className="techNameCont">
                            <p className="termi" style={{opacity:0.5}}>THE TERMINOLOGY...</p>
                            <h1 className="techName">{selectedTech.name}</h1>
                            <p className="techBio">{selectedTech.description}</p>
                        </div>

                    </div>
                    <div className="rightAreaTech">
                        <img src={selectedTech.images.portrait} alt={selectedTech.name} />
                    </div>
                </div>

            </div>   
        </>    
    );
}
