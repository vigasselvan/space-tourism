import React,{useState} from 'react'
import Nav  from "./nav";
import data from "../data.json";
import bgImg from "../assets/crew/background-crew-desktop.jpg";
import douglasImg from "../assets/crew/image-douglas-hurley.webp";
import markImg from "../assets/crew/image-mark-shuttleworth.webp";
import victorImg from "../assets/crew/image-victor-glover.webp";
import anoushehImg from "../assets/crew/image-anousheh-ansari.webp";


export default function crew() {
  const [value, setvalue] = useState(0);
    const crewName = ["Douglas Hurley","Mark Shuttleworth","Victor Glover","Anousheh Ansari"]; 
    const crewImg = {
        "Douglas Hurley" : douglasImg,
        "Mark Shuttleworth" : markImg,
        "Victor Glover" : victorImg,
        "Anousheh Ansari" : anoushehImg
    }

    // Findind the selected destination from the data
    const selectedCrew = data.crew.find(
      (crew) => crew.name.toLowerCase() === crewName[value].toLowerCase()
    );
    
    return(

        <>
            <div style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
                <Nav />
                <div className="crewCont">
                    <div className="leftAreaCrew">
                    
                        <div className="crewNameCont">
                            <h1 className="crewDesg" style={{opacity: 0.5}}>{selectedCrew.role}</h1>
                            <h1 className="crewName">{selectedCrew.name}</h1>
                            <p className="crewBio">{selectedCrew.bio}</p>
                            <div className="buttonColl">
                                <button className="button" onClick={()=>{
                                    setvalue(0)
                                }}></button>
                                <button className="button" onClick={()=>{
                                    setvalue(1)
                                }}></button>
                                <button className="button" onClick={()=>{
                                    setvalue(2)
                                }}></button>
                                <button className="button" onClick={()=>{
                                    setvalue(3)
                                }}></button>
                            </div>
                        </div>

                    </div>
                    <div className="rightAreaCrew">
                        <img src={crewImg[selectedCrew.name]} alt={selectedCrew.name} />
                    </div>
                </div>

            </div>   
        </>    
    );
}
