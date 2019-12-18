import React from 'react';
//import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
//import 'typeface-roboto';

import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';
import GoogleFetcher from './googleFetcher.jsx';
import logoicon from './minilogoicon.png';
import fetchdataicon from './miniGoogleIcon.png';

import './App.css';

let restaurants=require('./restaurant.json');
let googleJson= require('./googleData.json');

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRating=this.saveRating.bind(this);
    this.saveRestaurant=this.saveRestaurant.bind(this);
   
    this.state={
                restaurants:this.formatData(),
                fetchrestaurants:false,
                addedrestaurants:[],
                showcomponent:false,
                restaurantClicked:-1,
              }
  }
  getRatings=(index)=>{
    
    return restaurants[index].ratings.map((item)=>{return item.stars});
  }
  getarrayAverage=(array)=>{return (array.reduce((a,b)=>(a+b))/array.length);}
   round = (x, n) =>{ return parseFloat(Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);} 
  
  formatRating=(index)=>{
    let rat=this.getarrayAverage(this.getRatings(index));
    let rating=parseInt(rat.toFixed(4),10);
    return restaurants[index].ratings.map((item)=>{return {rating:rating,comment:item.comment}})
  }
 formatData=()=>{
    return  restaurants.map((item,index)=>{
    let position={ lat:item.lat, lng:item.long}
    let data={
      key:index,
      icon:logoicon,
      name:item.restaurantName,
      adress:item.address,
      position:position,
      rating:this.formatRating(index)
   }
   return data;
  });
 
 }
 formatgoogleJsondata=()=>{
  return googleJson.map((item,index)=>{
     let rating=item.rating;
     let data={
        key:index,
        icon:fetchdataicon,
        name:item.name,
        adress:item.vicinity,
        position:item.geometry.location,
        rating:[{rating:rating, comment:''}]
     }
     return data;
  });
  }
  
 
  saveRating(rating){
   
 this.setState(
      (prevState)=>{
       
       let restaurants=prevState.restaurants;
       restaurants[this.state.restaurantClicked].rating.push(rating);
       return {restaurants};
      }
      
    );
   
    	
  }
  saveRestaurant(restaurant){
    this.setState(
      (prevState)=>{
        let restaurants=prevState.restaurants;
        restaurants.push(restaurant);
        return {restaurants};
      }
    );
  }
  
  
  
  handlerestaurantclick(index){
    this.setState({restaurantClicked:index, showcomponent:true});
  }
  handlefetch(){
    this.setState((prevState)=>{
         let restaurants=prevState.restaurants;
         let temp=restaurants.concat(this.formatgoogleJsondata());
         return {fetchrestaurants:true,restaurants:temp}
    });
    
  }
 render(){
  
 // console.log(this.state.restaurants);
   return (
    
  <div className="App">
    
    <header className="App-header">
     
      <h2>
      The resto reviewer
      </h2>
     </header>
     <ErrorBoundary>
   
     <GoogleFetcher handlefetch={()=>this.handlefetch()} ></GoogleFetcher>
     <Restaurantlist restaurants={this.state.restaurants} onclickedrestaurant={this.handlerestaurantclick} 
                     filter={this.handlefilter}fetchresto={this.state.fetchrestaurants}/>
     {this.state.showcomponent?<Comment name={this.state.restaurants[this.state.restaurantClicked].name}
                                adress={this.state.restaurants[this.state.restaurantClicked].adress} 
                               ratings={this.state.restaurants[this.state.restaurantClicked].rating} 
                               onratingSave={this.saveRating}  
                              />:null}
      <GoogleApiWrapper restaurants={this.state.restaurants} fetchresto={this.state.fetchrestaurants} saveResto={this.saveRestaurant}></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
