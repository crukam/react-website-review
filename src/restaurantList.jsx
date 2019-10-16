import React from 'react';
import Restaurant from './restaurant.jsx';
import Filter from './restaurantFilters.jsx';
import './restaurantlist.css';

class Restaurantlist extends React.Component{
   
   /* handleclick(index){
       this.props.onclickedrestaurant(index);
    }*/
   
    render(){
        let restaurantArray=Object.keys(this.props.restaurants).map((id)=>this.props.restaurants[id]);
        let list=[];
        
        restaurantArray.forEach((item,index)=>{
                   list.push(<Restaurant key={index} name={item.restaurantName} 
                    adress={item.address} ratings={item.ratings} /*onClick={()=>this.handleclick(index)}*/> </Restaurant>)})
        return(<div className="restaurant-list">
                 <Filter/>
                 {list}
               </div>);
    }
    
    
}
export default Restaurantlist;
