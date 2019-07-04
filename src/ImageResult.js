import React,{Component} from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//  import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



export default class ImageResult extends React.Component{
    render(){
        let imageListContent;
        const {images} = this.props;

        if(images){
            imageListContent = (
                 <GridList cols={3}> 
                 {images.map(img =>(
                        <GridListTile
                            title={img.strMeal}
                            key={img.idMeal} 
                        >
                            <img src={img.strMealThumb}/>
                        </GridListTile>
                    ))} 
                </GridList> 
            );

        }else{
            imageListContent = null;
        }
        return(
            <div>{imageListContent}</div>
        );
    }

}

ImageResult.propTypes ={
    images: PropTypes.array.isRequired
}