import React from 'react';
import Restaurant from './restaurant.jsx';
import Filter from './restaurantFilters.jsx';
import './restaurantlist.css';


class Restaurantlist extends React.Component{
    constructor(props){
        super(props);
        this.handle_min=this.handle_min.bind(this);
        this.handle_max=this.handle_max.bind(this);
        this.state={rat_min:0,rat_max:5,rat_average:0}
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
                 <Filter getmin_filter={this.handle_min} getmax_filter={this.handle_max}/>
                  {this.getdataforRender()}  
               </div>);
    }
    
    
}
export default Restaurantlist;
