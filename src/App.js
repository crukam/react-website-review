import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
import Inputform from './restaurantInput.jsx';
import restaurants  from './restaurant.json';
import './App.css';
/*import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  */
function App() {
  
 console.log(restaurants[0]);
  return (
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
         Restaurants reviews
        </h2>
       </header>
       <Inputform/>
       <GoogleApiWrapper Restaurants={restaurants} ></GoogleApiWrapper>
       
    </div>
  );
}

export default App;
