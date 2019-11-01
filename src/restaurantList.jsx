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
    average=(array)=>{
       
        return (array.reduce((a,b)=>(a+b))/array.length);
       }
   
    render(){
       let restaurantArray=Object.keys(this.props.restaurants).map((id)=>this.props.restaurants[id]);
        /* let ratings= Object.keys(this.props.restaurants).map((i)=>this.props.restaurants[i]);
        let starsObj=ratings.map(item=>item.ratings);
        let star=[]
        starsObj.forEach(function(item,index){
            star.push(item[index].stars);
        });*/
        
        let list=[];
        
        restaurantArray.forEach((item,index)=>{
                   list.push(<Restaurant key={index} name={item.restaurantName} 
                    adress={item.address} ratings={item.ratings} onClick={()=>this.handleclick(index)}> </Restaurant>)})
        return(<div className="restaurant-list">
                 <Filter getmin_filter={this.state.handle_min} get_max={this.state.handle_max}/>
                 {list}
               </div>);
    }
    
    
}
export default Restaurantlist;
