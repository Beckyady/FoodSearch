import React from 'react';
import './home.css';
import cabbage from './cabbage.jpg';



function Home() {
    return(
        <div className='homebody'>
            <div>
            <div className='spanDiv'>
            <span className='orangespan'>Food Services</span><br></br>
            <span className='span1'>Welcome to F.F.O</span><br></br>
            <span className='span2'>A home of quality food...</span> <br></br>
            <span>One cannot think well, love well, sleep well, if one has not dined well.</span><br></br>
            <span>I've long believed that good food, good eating, is all about risk. 
                Whether <br></br>we're talking about unpasteurized Stilton, raw oysters or <br></br>working for organized 
                crime associates, food, for me, has always been  <br></br>an adventure.</span>
                <p>
               
                <a href='http://www.wiseoldsayings.com/food-quotes/'> 
                    <div className='more' >Discover more..</div>
                </a>
            
                    </p>
            </div>
            </div>
            <div className='bodyimg'><img src={cabbage}></img> </div>
        </div>
    )

}
export default Home;