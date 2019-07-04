import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
// import TextField from '@material-ui/core/TextField';
import ImageResult from './ImageResult';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';



 class Search extends React.Component{
  constructor(){
    super();
    this.state = {
      searchText: '',
      countryText:'',
      apiUrl:'https://www.themealdb.com/api/json/v1/1/',
      images:[],
}
  this.handleClick = this.handleClick.bind(this)
}
handleClick(){
  //  e.preventDefault();
    this.props.history.push("results");
  }

   
onTextChange =  (e) =>{
  this.setState({[e.target.name]:e.target.value}, () =>{
     axios.get(`${this.state.apiUrl}search.php?s=${this.state.searchText}filter.php?a=${this.state.countryText}`)
    .then(res => this.setState({images:res.data.meals}))
    .catch(err => console.log(err));
  });
  };
  
 render(){
   console.log(this.state.images)

    return(
       <div className='col-md-6 search'>

         <form>
         <div class="input-group">
         <input type="text" name='searchText' onChange={this.onTextChange} value={this.state.searchText ||this.state.countryText} className="form-control" placeholder="Search here for food"/>
          <div class="input-group-btn">
               <Button onClick={this.handleClick}  className="btn btn-default" type="submit">
                 <i class="glyphicon glyphicon-search"/>
               </Button>
             </div> 
            </div>
        </form>  

        {/* {this.state.images.length > 0 ?(<ImageResult images={this.state.images}/>): null }  */}
      </div>
        
    );
}
}
export default withRouter(Search);
