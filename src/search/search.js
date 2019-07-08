import React from 'react';
import axios from 'axios';
import '../App.css';
import './search.css';
import GridList from '@material-ui/core/GridList';
import ImageResult from '../ImageResult';
// import GridListTile from '@material-ui/core/GridListTile';
// import { MDBCol, MDBIcon } from "mdbreact";

export default class Search extends React.Component{
 state = {
      searchText: '',
      apiUrl:'https://www.themealdb.com/api/json/v1/1/',
      images:[],
    }
   
onTextChange =  (e) =>{
  this.setState({[e.target.name]:e.target.value}, () =>{
    axios.get(`${this.state.apiUrl}search.php?s=${this.state.searchText}`)
    .then(res => {
      if (res.data.meals) {
          let images = res.data.meals;
          return this.setState({images});
      }
      
      return axios.get(`${this.state.apiUrl}filter.php?a=${this.state.searchText}`)
      .then(res => {
        if (res.data.meals) {
          let images = res.data.meals;
          return this.setState({images});
        }
        return this.setState({images: []})
      })
    })
    .catch(err => console.log(err))
  })
}
 render(){
   console.log(this.state.images)

    return(
      <div className='bdy'>
         <div className='searchimg'>
        <div className=' overlay'> 
        <div className='inputdiv'>
         <form>
        <div class="input-group">
        <input type="text" name='searchText' onChange={this.onTextChange} value={this.state.searchText} 
        className="form-control" placeholder="Search for food by name or country"/>
            </div>
        </form>
        </div> 
         </div>
        </div>

      <div className='result'>
      <GridList className='scroll' cols={3}>
        
        {this.state.images.length > 0 ?(<ImageResult images={this.state.images}/>):null}
     
       </GridList>
         

      </div>
      </div>
      
    );
      }
    }
   
     
