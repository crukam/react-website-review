import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import logoicon from './minilogoicon.png'




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
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  
 
displayRestaurantMarkers=()=>{
        return this.props.restaurants.map((item,index)=>{
            return <Marker key={index} onClick={this.onMarkerClick} 
                  position={{lat:item.lat,lng:item.long}}
                  title={item.restaurantName} name={item.restaurantName} icon={logoicon} >
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
                  position={{ lat: 53.607596, lng: -1.348026}}
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
 