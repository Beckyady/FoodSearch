import React from 'react';
import './App.css';
import FFO from './ffo';
import ImageResult from './ImageResult';
import Error from './Error'
import Search from './search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' component={FFO} exact/>
    <Route path='/results' component={ImageResult} />
    <Route component={Error}/>
    </Switch>
    
    
    </BrowserRouter>
    
  );
}

export default App;
