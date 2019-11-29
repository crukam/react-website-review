import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';


import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';
import GoogleFetcher from './googleFetcher.jsx';

import './App.css';

let restaurants=require('./restaurant.json');


class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRating=this.saveRating.bind(this);
    this.saveRestaurant=this.saveRestaurant.bind(this);
   
    this.state={
                restaurants:restaurants,
                fetchrestaurants:false,
                addedrestaurants:[],
                showcomponent:false,
                restaurantClicked:-1,
              }
  }
  saveRestaurant(restaurant){
    
    this.setState(
      (prevState)=>{
      
       let resto=prevState.addedrestaurants;
       resto.push(restaurant);
       return {resto};
      });
    console.log("after:"+ this.state.addedrestaurants);

  }
  saveRating(rating){
   
 this.setState(
      (prevState)=>{
       
       let restaurants=prevState.restaurants;
       restaurants[this.state.restaurantClicked].ratings.push(rating);
       return {restaurants};
      }
    );
    	
  }
  
  
  
  handlerestaurantclick(index){
    this.setState({restaurantClicked:index, showcomponent:true});
  }
  handlefetch(){
    this.setState({fetchrestaurants:true});
  }
 render(){
  
  this.state.fetchrestaurants? console.log("fetch initiated"):console.log("did not work")
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
     <Restaurantlist restaurants={restaurants} onclickedrestaurant={this.handlerestaurantclick} 
                     filter={this.handlefilter}fetchresto={this.state.fetchrestaurants}/>
     {this.state.showcomponent?<Comment ratings={restaurants[this.state.restaurantClicked].ratings} onratingSave={this.saveRating}  />:null}
     <GoogleApiWrapper restaurants={restaurants} 
                       googleRestaurant={this.state.googleRestaurants}
                       fetchresto={this.state.fetchrestaurants}></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
