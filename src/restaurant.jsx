import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  { faStar} from '@fortawesome/free-solid-svg-icons';
import './restaurant.css';
//import Button from '@material-ui/core/Button';
class Restaurant extends React.Component{
    
   
    
    render(){
        return(
            <button className="restaurant-wrapper"onClick={this.props.onClick} >
                <div className="restaurant name">{this.props.name}</div>
                <div className="restaurant adress ">{this.props.adress}</div>
                <div className="restaurant rating">{this.props.rating} <div className="star-outer" >
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <div className="star-inner" style={{width:this.props.rating *20+'%'}}>
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                             </div>
                         </div>                                                       
                 </div>
               
            </button>
        );
                     
    }
}
export default Restaurant;
