import React from 'react';
import Restaurant from './restaurant.jsx';
import Filter from './restaurantFilters.jsx';
import './restaurantlist.css';
import Comment from './comment.jsx'
class Restaurantlist extends React.Component{
   
    render(){
        let restaurantArray=Object.keys(this.props.restaurants).map((id)=>this.props.restaurants[id]);
        let list=[];
        /*console.log(restaurantArray);*/
        restaurantArray.forEach((item,key)=>{
                   list.push(<Restaurant key={KeyboardEvent} name={item.restaurantName} 
                    adress={item.address} ratings={item.ratings}> <Comment ratings={item.ratings}></Comment></Restaurant>)})
        return(<div class="restaurant-list">
                 <Filter/>
                 {list}
               </div>);
    }
    
    
}
export default Restaurantlist;
