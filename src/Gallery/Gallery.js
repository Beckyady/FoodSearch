import React from 'react';
import './gallery.css';
import bread from './bread.jpg';
import piza from  './piza.jpg';
import currystew from  './currystew.jpg';
import laksa from  './laksa.jpg';
import oats from  './oats.jpg';
import restaurant from  './restaurant.jpg';
import sushi from  './sushi.jpg';
import sardines from  './sardines.jpg';
import cornBread from  './cornBread.jpg';
import eran from  './eran.jpg';
import pancake from  './pancake.jpg';
import meat from  './meat.jpg';


function Gallery() {
    return(
    <div>
        <h2>
            Gallery
        </h2>
        <div className='images'>

<div className='row1'>
<div className='column'>
    <a href='https://www.misstamchiak.com/928-yishun-laksa/'> 
      <img src={laksa} className='img' /></a>
  </div>

  <div className='column'>
    <a href='https://breadandporridge.com/menu/'> 
      <img src={oats} className='img' /></a>
  </div>

  <div className='column'>
    <a href='https://theculturetrip.com/africa/nigeria/articles/where-to-find-the-best-jollof-in-abuja/'> 
      <img src={restaurant} className='img' /></a>
    </div>
  </div>

  <div className='row1'>
    <div className='column'>
      <a href='http://ricerestaurantandsushibar.com/'> 
      <img src={sushi} className='img' /> </a>
    </div>
    
  <div className='column'>
    <a href='https://www.tripadvisor.com/LocationPhotoDirectLink-g188669-d1097409-i107141420-O_Fado-Leuven_Flemish_Brabant_Province.html'>
      <img src={sardines} className='img' /> </a>
  </div>
    
  <div className='column'>
    <a href='https://www.thespruceeats.com/turkish-lavas-puff-break-recipe-3274371'>  
    <img src={bread} className='img' /></a>
  </div>
    </div>

<div className='row1'>
  <div className='column'>
      <a href='https://www.bettycrocker.com/recipes/cornbread/8990e15c-fc1d-4a8d-b8b3-4b37f45eca49'>
    <img src={cornBread} className='img' /></a> 
    </div>
    

    <div className='column'>
      <a href='https://www.dominos.ng/?utm_source=Google+&utm_medium=cpcSearch&gclid=CjwKCAjw04vpBRB3EiwA0Iieaor-DfGeK9sQe7PQKNsoiWV5hbL6q0p9licHvHcEQh3cEIwl8kdyjxoCASoQAvD_BwE'>
      <img src={piza} className='img' /></a>
      </div>
    
    <div className='column'>
      <a href='http://www.ethiopianvillagerestaurant.com/node/103'> 
      <img src={currystew} className='img' /> </a>
    </div>
  
</div>

<div className='row1'>
      <div className='column'>
          <a href='https://charlie-browns-pancake-steak-house.business.site/?utm_source=tripadvisor&utm_medium=referral'>
        <img src={eran} className='img' /></a> 
        </div>
        

        <div className='column'>
          <a href='https://charlie-browns-pancake-steak-house.business.site/?utm_source=tripadvisor&utm_medium=referral'>
          <img src={pancake} className='img' /></a>
          </div>
        
        <div className='column'>
          <a href='https://charlie-browns-pancake-steak-house.business.site/?utm_source=tripadvisor&utm_medium=referral'> 
          <img src={meat} className='img' /> </a>
        </div>
      
    </div>

</div>

    </div>
    )

}
export default Gallery;