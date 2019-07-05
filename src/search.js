import React from 'react';
import axios from 'axios';
import './App.css';
import { Button } from 'react-bootstrap';
import ImageResult from './ImageResult';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { MDBCol, MDBIcon } from "mdbreact";

export default class Search extends React.Component{
 state = {
      searchText: '',
      apiUrl:'https://www.themealdb.com/api/json/v1/1/',
      images:[],
    }
   
onTextChange =  (e) =>{
  this.setState({[e.target.name]:e.target.value}, () =>{
    axios.get(`${this.state.apiUrl}filter.php?a=${this.state.searchText}`)
    axios.get(`${this.state.apiUrl}search.php?s=${this.state.searchText}`)
    .then(res => {
      let images = (!res.data.meals) ? [] : res.data.meals; 
      this.setState({images:images})
    })
    .catch(err => console.log(err))
  })
}
 render(){
   console.log(this.state.images)

    return(
<div className='col-md-6 search'>
       <form>
        <div class="input-group">
        <input type="text" name='searchText' onChange={this.onTextChange} value={this.state.searchText} className="form-control" placeholder="Search here for food"/>
            </div>
        </form>
        <div className='scroll'>
        <GridList cols={3}>
        {this.state.images.length > 0 ?(<ImageResult images={this.state.images}/>):null}
         </GridList>

        </div>
        

          
      </div>
    );
      }
    }
   