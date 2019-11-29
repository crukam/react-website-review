import React from 'react';
import './restaurantlist.css';

class Restaurant extends React.Component{
    
   
    stars=()=>{return(this.props.ratings.map(
           (rate)=>{return (rate.stars)}))}
    average=(array)=>{
       
        return (array.reduce((a,b)=>(a+b))/array.length);
       }
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
