import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';


import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';
import GoogleFetcher from './googleFetcher.jsx';

import './App.css';

let restaurants=require('./restaurant.json');
let googleJson= require('./googleData.json');

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRating=this.saveRating.bind(this);
   // this.saveRestaurant=this.saveRestaurant.bind(this);
   
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
  formatRating=(index)=>{
    let rating=this.getarrayAverage(this.getRatings(index));
    return restaurants[index].ratings.map((item)=>{return {rating:rating,comment:item.comment}})
  }
 formatData=()=>{
    return  restaurants.map((item,index)=>{
    let position={ lat:item.lat, lng:item.long}
    let data={
      key:index,
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
        name:item.name,
        adress:item.vicinity,
        position:item.geometry.location,
        rating:[{rating:rating, comment:''}]
     }
     return data;
  });
  }

   
 
  saveRating(rating){
   // console.log (this.state.restaurants);
 this.setState(
      (prevState)=>{
       
       let restaurants=prevState.restaurants;
       restaurants[this.state.restaurantClicked].rating.push(rating);
       return {restaurants};
      }
      
    );
   // console.log (this.state.restaurants);
    	
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
  console.log(this.state.restaurants);
 
   return (
    
  <div className="App">
    
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
       Restaurants reviews
      </h2>
     </header>
     <ErrorBoundary>
   
     <GoogleFetcher handlefetch={()=>this.handlefetch()} ></GoogleFetcher>
     <Restaurantlist restaurants={this.state.restaurants} onclickedrestaurant={this.handlerestaurantclick} 
                     filter={this.handlefilter}fetchresto={this.state.fetchrestaurants}/>
     {this.state.showcomponent?<Comment ratings={this.state.restaurants[this.state.restaurantClicked].rating} onratingSave={this.saveRating}  />:null}
      <GoogleApiWrapper restaurants={this.state.restaurants} fetchresto={this.state.fetchrestaurants}></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
