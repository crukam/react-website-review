import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
import Inputform from './restaurantInput.jsx';
import restaurants  from './restaurant.json';
import Restaurantlist from './restaurantList.jsx'
import Comment from './comment.jsx'
import './App.css';
/*import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  */
class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.state={showcomponent:false,restaurantClicked:-1}
  }
 

  handlerestaurantclick(index){
    this.setState({restaurantClicked:index, showcomponent:true});
  }
  
 render(){
   
   return (
     
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
       Restaurants reviews
      </h2>
     </header>
     <Inputform/>
     <Restaurantlist restaurants={restaurants} onclickedrestaurant={this.handlerestaurantclick}/>
     {this.state.showcomponent?<Comment ratings={restaurants[this.state.restaurantClicked].ratings} />:null}
     <GoogleApiWrapper restaurants={restaurants} ></GoogleApiWrapper>
     
  </div>
);
}
  
}

export default App;
