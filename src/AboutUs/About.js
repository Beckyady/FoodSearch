import React from 'react';
import './about.css';
import first from './first.png';

function About() {
    return(
    <div>
        <div className='imgbg'>
        <div className=' overlay'>
        <h1>
            About Us
        </h1><span></span>
        </div>
        </div>

        <div className='body'>
        <div><span className='spann'>
        About Us </span><br></br>
<span><h1>Discover Our Story</h1>
</span>
<p><strong>Welcome to Ristora, a Mordern Restaurant With Focus On <br></br> Premium Food Tastes</strong></p>
<p>Ristora is a restaurant, bar and coffee roastery located on a busy corner site in<br></br> Farringdon’s Exmouth Market. With glazed frontage on two sides of the building,<br></br>
 overlooking the market and a bustling London intersec.</p>

<p>John Arizenia</p>
<p>Founder of Restaurant</p>

            </div>
        <div>
            <div className='imgflex'>
            <div><img className='imgg' src={first}/></div>
            </div>
            
        </div>

        </div>
       

    </div>
    )

}
export default About;