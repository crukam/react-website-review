import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
import Inputform from './restaurantInput.jsx';
import restaurants  from './restaurant.json';
import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';

import './App.css';
/*import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  */
class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRestaurant=this.saveRestaurant.bind(this);
   
    this.state={restaurants:Restaurantlist,showcomponent:false,restaurantClicked:-1,newrestaurant:{}}
  }
  
  saveRestaurant(restaurant){
    if(!restaurant.key){restaurant.key= Object.keys(this.state.restaurants).length;}
    this.setState((prevState)=>
                 {
                   let restaurants=prevState.restaurants;
                   restaurants[restaurant.key]=restaurant;
                   return{restaurants};
                  });
  
  }
  
  
  handlerestaurantclick(index){
    this.setState({restaurantClicked:index, showcomponent:true});
  }
  
 render(){
  console.log(restaurants);
   return (
    
  <div className="App">
    
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
       Restaurants reviews
      </h2>
     </header>
     <ErrorBoundary>
     <Inputform onSave={this.saveRestaurant}/>
     
     <Restaurantlist restaurants={restaurants} onclickedrestaurant={this.handlerestaurantclick} filter={this.handlefilter}/>
     {this.state.showcomponent?<Comment ratings={restaurants[this.state.restaurantClicked].ratings} />:null}
     <GoogleApiWrapper restaurants={restaurants} ></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
