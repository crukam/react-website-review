import React from 'react';
import './googleFetcher.css';

class GoogleFetcher extends React.Component{
    constructor(props){
        super(props);
        this.state={googleRestaurants:[], isloaded: false}
    }
    UNSAFE_componentDidMount(){
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=53.607596,-1.348026&radius=1000&type=restaurant&keyword=pizza&key=AIzaSyDdc8rD8-iI6ZMvSGakZ1ZJ5wkOzUFRWiI').
        then( results=> results.json()).then(
            (data)=>{console.log(data)});
    }
    render(){
        return ( <button className="place-fetcher">
        Google Place
     </button>
  );
        
    }
}
export default GoogleFetcher;