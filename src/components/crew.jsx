import React from 'react'
import Nav  from "./nav";
import data from "../data.json";
import bgImg from "../assets/crew/background-crew-desktop.jpg";

export default function crew() {
  const [value, setvalue] = useState(0);
    const crewName = ["Douglas Hurley","Mark Shuttleworth","Victor Glover","Anousheh Ansari"]; 

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
                        <img src={selectedCrew.images.webp} alt={selectedCrew.name} />
                    </div>
                </div>

            </div>   
        </>    
    );
}
