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
    <a href='https://pixabay.com/photos/laksa-popular-famous-coconut-lunch-1731121/'> 
      <img src={laksa} className='img' /></a>
  </div>

  <div className='column'>
    <a href='https://pixabay.com/photos/oats-overnight-oats-porridge-sweet-3272113/'> 
      <img src={oats} className='img' /></a>
  </div>

  <div className='column'>
    <a href='https://pixabay.com/photos/shish-kebab-meat-skewer-417994/'> 
      <img src={restaurant} className='img' /></a>
    </div>
  </div>

  <div className='row1'>
    <div className='column'>
      <a href='https://pixabay.com/photos/sushi-eat-japanese-asia-food-rice-491425/'> 
      <img src={sushi} className='img' /> </a>
    </div>
    
  <div className='column'>
    <a href='https://pixabay.com/photos/sardines-restaurant-food-fresh-3492588/'>
      <img src={sardines} className='img' /> </a>
  </div>
    
  <div className='column'>
    <a href='https://pixabay.com/photos/bread-croissant-morning-puff-paste-1284438/'>  
    <img src={bread} className='img' /></a>
  </div>
    </div>

<div className='row1'>
  <div className='column'>
      <a href='https://pixabay.com/photos/corn-bread-loaf-fresh-bread-maize-738244/'>
    <img src={cornBread} className='img' /></a> 
    </div>
    

    <div className='column'>
      <a href='https://pixabay.com/photos/piza-food-cheese-plate-lunch-3010062/'>
      <img src={piza} className='img' /></a>
      </div>
    
    <div className='column'>
      <a href='https://pixabay.com/photos/laksa-popular-famous-coconut-lunch-1731121/'> 
      <img src={currystew} className='img' /> </a>
    </div>
  
</div>

<div className='row1'>
      <div className='column'>
          <a href='https://pixabay.com/photos/corn-bread-loaf-fresh-bread-maize-738244/'>
        <img src={eran} className='img' /></a> 
        </div>
        

        <div className='column'>
          <a href='https://pixabay.com/photos/piza-food-cheese-plate-lunch-3010062/'>
          <img src={pancake} className='img' /></a>
          </div>
        
        <div className='column'>
          <a href='https://pixabay.com/photos/laksa-popular-famous-coconut-lunch-1731121/'> 
          <img src={meat} className='img' /> </a>
        </div>
      
    </div>

</div>

    </div>
    )

}
export default Gallery;