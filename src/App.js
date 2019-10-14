import React from 'react';
import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
import Inputform from './restaurantInput.jsx';
import restaurants  from './restaurant.json';
import Restaurantlist from './restaurantList.jsx'
import './App.css';
/*import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';  */
function App() {
  
 
  return (
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
         Restaurants reviews
        </h2>
       </header>
       <Inputform/>
       <Restaurantlist restaurants={restaurants}/>
       <GoogleApiWrapper restaurants={restaurants} ></GoogleApiWrapper>
       
    </div>
  );
}

export default App;
