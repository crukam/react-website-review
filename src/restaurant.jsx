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
            <button class="restaurant-wrapper">
                <div class="restaurant name">{this.props.name}</div>
                <div class="restaurant adress ">{this.props.adress}</div>
                <div class="restaurant rating">{this.average(this.stars())}</div>
            </button>
        );
                     
    }
}
export default Restaurant;
