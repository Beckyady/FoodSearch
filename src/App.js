import React from 'react';
import './App.css';
import About from './AboutUs/About';
import Gallery from './Gallery/Gallery';
// import ImageResult from './ImageResult';
import Error from './Error'
import Navigation from './Navbar/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './footer';
import Search from './search/search';


function App() {
  return (
    <div className='App'>
        <div className='bg'>
        <Navigation/>
        <BrowserRouter>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About} />
    <Route path='/gallery' component={Gallery} />
    <Route path='/search' component={Search} />

    {/* <Route path='/results' component={ImageResult} /> */}
    <Route component={Error}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
        </div>
        
        </div>
    
    
  );
}

export default App;
