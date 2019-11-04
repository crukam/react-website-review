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

         
   getRestaurant(name){
        for(let i=0;i<this.props.restaurants.length;i++){
            if(this.props.restaurants[i].restaurantName===name)
             return(this.props.restaurants[i]);
        }
        return null;
    }  
    getRatings(name){
      return  this.getRestaurant(name)!=null? this.getRestaurant(name).ratings:null;
    } 
    getStars(name){
        if(this.getRatings(name)=== null)return null;
       return this.getRatings(name).map((item)=>{return item.stars})
    }

   
   handleclick(index){
       this.props.onclickedrestaurant(index);
    }
    
    handle_min(min){this.setState({rat_min:min});}
    handle_max(max){this.setState({rat_max:max});}
    average=(array)=>{
       
        return (array.reduce((a,b)=>(a+b))/array.length);
       }
   
    render(){
       console.log(this.getStars("Hemsworth Golden Cod"));
       // let iterator = this.props.restaurants.keys();
     //for(let i=0;i<this.props.restaurants.length;i++){console.log(this.props.restaurants[i]);}
      //for(let key in iterator ) {console.log(key);};
        
        let list=[];
        
        this.props.restaurants.forEach((item,index)=>{
                   list.push(<Restaurant key={index} name={item.restaurantName} 
                    adress={item.address} ratings={item.ratings} onClick={()=>this.handleclick(index)}> </Restaurant>)})
        return(<div className="restaurant-list">
                 <Filter getmin_filter={this.state.handle_min} get_max={this.state.handle_max}/>
                 {list}
               </div>);
    }
    
    
}
export default Restaurantlist;
