import React from 'react'
import "./Homepage.css"
import {useNavigate} from "react-router-dom";

const Homepage = () => {
    const navigate= useNavigate();
const navi=()=>{
    navigate("/start1")
}
  return (
    <>
    <h1 data-text="Check your typing skills in a minute">Check your typing skills in a minute</h1>

    <div className='btn'>
      <button onClick={navi}>Easy Level</button>
      
      <button onClick={()=>navigate("/start2")}>Medium Level</button>
      <button onClick={()=>navigate("/start3")}>Hard Level</button>
    </div>

    <nav className='touch_nav'>
    
    <h2>Touch Typeing...</h2>
   

        {/* <h2 onClick={navi}>Start Now</h2> */}
   
        
    </nav>
    <div className='touch_div'>
    

    
        <img src="https://www.millhoppertech.com/resources/home_row_keys.png" alt="" />
   
   
    </div>
    </>
    
  )
}

export default Homepage
