import React from 'react';
import './App.css';
import bread from './assets/bread.jpg';
import piza from  './assets/piza.jpg';
import currystew from  './assets/currystew.jpg';
import laksa from  './assets/laksa.jpg';
import oats from  './assets/oats.jpg';
import restaurant from  './assets/restaurant.jpg';
import sushi from  './assets/sushi.jpg';
import sardines from  './assets/sardines.jpg';
import cornBread from  './assets/cornBread.jpg';

export default class Images extends React.Component{
    render(){
        
        return(
<div className='images'>
  <div className='row'>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/laksa-popular-famous-coconut-lunch-1731121/'> 
      <img src={laksa} className='img' /></a>
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/oats-overnight-oats-porridge-sweet-3272113/
'> 
      <img src={oats} className='img' /></a>
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/shish-kebab-meat-skewer-417994/'> 
      <img src={restaurant} className='img' /></a>
      </div>
    </div>
  </div>

  <div className='row'>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/sushi-eat-japanese-asia-food-rice-491425/'> 
      <img src={sushi} className='img' /> </a>
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/sardines-restaurant-food-fresh-3492588/'>
       <img src={sardines} className='img' /> </a>
      </div>
    </div>
    <div className='column'>
     <div className='column1'> 
     <a href='https://pixabay.com/photos/bread-croissant-morning-puff-paste-1284438/'>  
     <img src={bread} className='img' /></a>
      </div>
    </div>
  </div>

  <div className='row'>
    <div className='column'>
      <div className='column1'>
     <a href='https://pixabay.com/photos/corn-bread-loaf-fresh-bread-maize-738244/'>
     <img src={cornBread} className='img' /></a> 
      
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/piza-food-cheese-plate-lunch-3010062/'>
      <img src={piza} className='img' /></a>
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
      <a href='https://pixabay.com/photos/laksa-popular-famous-coconut-lunch-1731121/'> 
      <img src={currystew} className='img' /> </a>
      </div>
    </div>
  </div>

</div>
        )
    }
}