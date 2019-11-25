import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';


import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';


import './App.css';
let restaurants=require('./restaurant.json');

/*import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  */
class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRating=this.saveRating.bind(this);
    this.saveRestaurant=this.saveRestaurant.bind(this);
   
    this.state={
                restaurants:restaurants,
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
  
 render(){
  
  console.log("after:"+ this.state.addedrestaurants);
  // console.log( this.state.restaurants);
   return (
    
  <div className="App">
    
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
       Restaurants reviews
      </h2>
     </header>
     <ErrorBoundary>
   
     
     <Restaurantlist restaurants={restaurants} onclickedrestaurant={this.handlerestaurantclick} filter={this.handlefilter}/>
     {this.state.showcomponent?<Comment ratings={restaurants[this.state.restaurantClicked].ratings} onratingSave={this.saveRating}  />:null}
     <GoogleApiWrapper restaurants={restaurants} ></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
