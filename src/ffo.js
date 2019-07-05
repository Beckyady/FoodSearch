import React from 'react';
import './App.css';
import Search from './search';
import Images from './images'
import Footer from './footer'


export default class FFO extends React.Component{
render(){
    const imgBody={
        marginTop:30
    }
    return(
        <div className='App'>
        <div className='bg'>
        <div className='overlay'>
        <div className='spanDiv'><span className='span1'>Welcome to F.F.O</span><br></br>
        <span className='span2'>A home of quality food...</span></div>
        <p>
            <Search/>

</p>
       
        </div>
        </div>
        <div style={imgBody}> <Images/></div>
       <Footer/> 
        </div>
      
    )
}
}