import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import logoicon from './minilogoicon.png';
import fetchdataicon from './miniGoogleIcon.png';
//let googlefetchdata=require('./googleData.json');


const mapStyles = {
  width: '100%',
  height: '100%',
  marginLeft:'0%',
  marginTop:'0%',
  border:'3px solid #e6e6e6',
  position:'relative',
  z:-1
};

 
export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
                hasError: false ,
                showingInfoWindow: false,
                activeMarker: {},
                selectedPlace: {},
                restaurant:{}
              }

  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  convertAdress= (adress)=>{
    let geocoder = new this.props.google.maps.Geocoder();
    let res=[];
    geocoder.geocode({ 'address': adress},function(results, status){
      if (status === this.props.google.maps.GeocoderStatus.OK) {
        res.push(results[0].geometry.location.lat());
        res.push(results[0].geometry.location.lng());
       }
       return res;
    } );

      
  }
  convertPosition= (location)=>{
    let geocoder  = new this.props.google.maps.Geocoder();    // create geacoder object
    let geocaderStatus=this.props.google.maps.GeocoderStatus.OK;
    var Response=[];
   geocoder.geocode({'latLng': location},(results,status)=> {
      if(status ===geocaderStatus){
        var  add = results[0].formatted_address;
         Response.push(add);
       }
      
    });
    return Response; 
   }
  
  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

    onMapClicked = (props,map,e) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow:false,
          activeMarker: null
        })
      }
      
      if(this.convertPosition({lat:e.latLng.lat(),lng:e.latLng.lng()})){
        let data={
          key:new Date().getTime(),
          name:'customer resto',
          adress:this.convertPosition({lat:e.latLng.lat(),lng:e.latLng.lng()}),
          position:{lat:e.latLng.lat(),lng:e.latLng.lng()},
          rating:[{rating:5, comment:'Excellent'}]
        }
        this.setState({restaurant:data});
      }
       this.props.saveResto(this.state.restaurant);
  }

    
   
 
displayRestaurantMarkers=()=>{
        return this.props.restaurants.map((item,index)=>{
            return <Marker key={index} onClick={this.onMarkerClick} 
                  position={item.position}
                  title={item.restaurantName} name={item.restaurantName} icon={ this.props.fetchresto ? fetchdataicon :logoicon} >
                     <InfoWindow
                         marker={this.state.activeMarker}
                         visible={this.state.showingInfoWindow}>
                        <div>
                           <h1>{this.state.selectedPlace.name}</h1>
                       </div>
                     </InfoWindow>
                  </Marker>
           
           })
          }
  


 
  render() {
    // this.props.restaurants.forEach(element => {console.log(element.position);
       
    // });
    if (this.state.hasError) {
      
      return <h1>Something went wrong.</h1>;
     }
    return (
	     
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 53.607596, lng: -1.348026}}>
          <Marker onClick={this.onMarkerClick}
                  position={{ lat: 53.607596 , lng: -1.348026}}
                  name={'current location'}
                 >
                  
                     <InfoWindow 
                       marker={this.state.activeMarker}
                       visible={true}>
                        <div>
                           <h1>{'Current location'}</h1>
                       </div>
                     </InfoWindow>
                  </Marker>
             
             {this.displayRestaurantMarkers()}
        </Map> );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDdc8rD8-iI6ZMvSGakZ1ZJ5wkOzUFRWiI'
})(MapContainer);
 