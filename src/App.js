import React from 'react';
//import logo from './logo.png';
import GoogleApiWrapper from './googlemapWrapper.jsx';
//import 'typeface-roboto';
import Inputname from './restaurantInput.jsx';
import Restaurantlist from './restaurantList.jsx';
import Comment from './comment.jsx';
import ErrorBoundary from './errorBandary.jsx';
import GoogleFetcher from './googleFetcher.jsx';
import logoicon from './minilogoicon.png';
import fetchdataicon from './miniGoogleIcon.png';
import logo from './gourmetlogoicon.png';
import './App.css';

let restaurants=require('./restaurant.json');
let googleJson= require('./googleData.json');

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlerestaurantclick=this.handlerestaurantclick.bind(this);
    this.saveRating=this.saveRating.bind(this);
    this.saveRestaurant=this.saveRestaurant.bind(this);
    this.handlerestonamefetch=this.handlerestonamefetch.bind(this);
    this.displayrestonamefetch=this.displayrestonamefetch.bind(this);
    this.fetchnewResto=this.fetchnewResto.bind(this);
    this.hidelist=this.hidelist.bind(this);
    this.hidecomment=this.hidecomment.bind(this);
    this.state={
                restaurants:this.formatData(),
                fetchrestaurants:false,
                addedrestaurants:[],
                showcomponent:false,
                showRestoInput:false,
                newrestoname:'custom-resto',
                newresto:null,
                restaurantClicked:-1,
                showlist:true
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
  
  hidelist(){
    this.setState({showlist:false});
  }
  hidecomment(){
    this.setState({showcomponent:false});
  }
  
  handlerestaurantclick(index){
    this.setState({restaurantClicked:index, showcomponent:true});
  }
  displayrestonamefetch(){this.setState({showRestoInput:true});}
  fetchnewResto(resto){
    this.setState({newresto:resto});}
  handlerestonamefetch(input){
    if(input){ this.setState({newrestoname:input,showRestoInput:false});}

    //fetch new resto
    this.setState((prevState)=>{
      let newresto=prevState.newresto;
      newresto.name=input;
      return newresto;
    });
    console.log('before:'+ this.state.restaurants)
    this.saveRestaurant(this.state.newresto);
    //save restaurant
    console.log(this.state.restaurants);

  }
  handlefetch(){
    this.setState((prevState)=>{
         let restaurants=prevState.restaurants;
         let temp=restaurants.concat(this.formatgoogleJsondata());
         return {fetchrestaurants:true,restaurants:temp}
    });
    
  }
  
 render(){
  //console.log(this.state.newrestoname);
 //console.log(googleJson[0].photos[0].html_attributions[0].split('>')[0]);
   return (
    
  <div className="App">
    
    <header className="App-header">
      <div className="App-logo"><img src={logo} alt='logo'/></div>
      
      <h2>
      The gourmet's corner
      </h2>
     </header>
     <ErrorBoundary>
    
     <GoogleFetcher handlefetch={()=>this.handlefetch()} ></GoogleFetcher>
     {this.state.showlist?<Restaurantlist restaurants={this.state.restaurants} onclickedrestaurant={this.handlerestaurantclick} 
                     filter={this.handlefilter}fetchresto={this.state.fetchrestaurants} hidelist={this.hidelist}/>:null}
     {this.state.showcomponent?<Comment resto={this.state.restaurants[this.state.restaurantClicked]}name={this.state.restaurants[this.state.restaurantClicked].name}
                                adress={this.state.restaurants[this.state.restaurantClicked].adress} 
                               ratings={this.state.restaurants[this.state.restaurantClicked].rating} 
                               onratingSave={this.saveRating} 
                               hidecomment={this.hidecomment} 
                              />:null}
      { this.state.showRestoInput?<Inputname fetchrestoname={this.handlerestonamefetch}/>:null}
      <GoogleApiWrapper restaurants={this.state.restaurants} fetchresto={this.state.fetchrestaurants} fetchuserResto={this.fetchnewResto}       fetchrestoname={this.state.newrestoname} displayrestonameinput={this.displayrestonamefetch} handleuserRestosave={this.handlerestonamefetch} ></GoogleApiWrapper>
     </ErrorBoundary>
  </div>
);

}
  
}

export default App;
