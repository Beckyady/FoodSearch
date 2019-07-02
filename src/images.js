import React from 'react';
import './App.css';
import bread from './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';
import piza from  './assets/bread.jpg';

export default class Images extends React.Component{
    render(){
        
        return(
<div className='images'>
<div className='row'>
    <div className='column'>
      <div className='column1'>
      <img src={bread} width="307" height="250" />
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
  </div>

  <div className='row'>
    <div className='column'>
      <div className='column1'>
        Some Text in Column One
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
  </div>

  <div className='row'>
    <div className='column'>
      <div className='column1'>
        Some Text in Column One
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
    <div className='column'>
      <div className='column1'>
        Some Text in Column Two
      </div>
    </div>
  </div>
</div>
        )
    }
}