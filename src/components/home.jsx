import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './nav';
import bgImg from '../assets/home/background-home-desktop.jpg'

export default function Home() {
  return (
    <>
      <div className='homePage' style={{backgroundImage: `url(${bgImg})`}}>
      <Nav />
        <div className='homeCont'>
          <div className='homeTxt'>
            <h3>SO,  YOU  WANT  TO  TRAVEL  TO</h3>
            <h1>SPACE</h1>
            <p>Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
          <div className='homeBtn'>
            <Link to='/destination'>
            <div className='btnWrap' >
              <h2>EXPLORE</h2>
            </div>
            </Link>
          </div>
        </div>


      </div>
    </>
  )
}
