import React from 'react';
import Restaurant from './restaurant.jsx';
import Filter from './restaurantFilters.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  { faBars,faWindowClose} from '@fortawesome/free-solid-svg-icons';
import './restaurantlist.css';
const iconStyle = {
    height:'80%',
    width:'5%',
    margin:'1%'
};


class Restaurantlist extends React.Component{
    constructor(props){
        super(props);
        this.handle_min=this.handle_min.bind(this);
        this.handle_max=this.handle_max.bind(this);
        this.state={rat_min:0,rat_max:5,rat_average:0,hidelist:true}
    }
   
    handleclick(index){
       this.props.onclickedrestaurant(index);
    }
    
    handle_min(min){this.setState({rat_min:min});}
    handle_max(max){this.setState({rat_max:max});}
   
    filteredJsondata=()=>{
        return this.props.restaurants.filter((item)=>{
            return (this.state.rat_min<=item.rating[0].rating && item.rating[0].rating<=this.state.rat_max);
        });
    }
    getdataforRender=()=>{
       
        return this.filteredJsondata().map((item,index)=>{
            return(<Restaurant key={index} name={item.name} 
                adress={item.adress} rating={item.rating[0].rating} onClick={()=>this.handleclick(index)}> </Restaurant>)
        });
       
    }
   
    render(){
      
          
        return(<div className="restaurant-list">
                 <div className="crud-div" ><FontAwesomeIcon style={iconStyle} icon={faBars}/><FontAwesomeIcon style={iconStyle} icon={faWindowClose} onClick={this.props.hidelist}/></div>
                 <h3 className="restaurant-add">To add a restaurant click on the map </h3>
                 
                     <Filter getmin_filter={this.handle_min} getmax_filter={this.handle_max}/>
                     <div className="restaurant-items">
                          {this.getdataforRender()} 
                     </div>
               </div>);
    }
    
    
}
export default Restaurantlist;
