import React from 'react';
import './restaurantlist.css';

class Restaurant extends React.Component{
    
   
    
    render(){
        return(
            <button className="restaurant-wrapper" onClick={this.props.onClick} >
                <div className="restaurant name">{this.props.name}</div>
                <div className="restaurant adress ">{this.props.adress}</div>
                <div className="restaurant rating">{this.props.rating}</div>
            </button>
        );
                     
    }
}
export default Restaurant;
