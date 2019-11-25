import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faBars} from '@fortawesome/free-solid-svg-icons';
import './restaurantInput.css';
const Init_value={restaurantName:'',address:''}
class Inputform extends React.Component{
	constructor(props){
		super(props);
		this.handlechange=this.handlechange.bind(this);
		this.handleSave=this.handleSave.bind(this);
		this.state={
			restaurant:Object.assign({},Init_value),
		     error:{}}

	}
	handlechange(e){
		
		const name=e.target.name;
		
		const value=e.target.value;
		
		this.setState((prevState)=>{
						  
						  prevState.restaurant[name]=value;
						  let resto = prevState.restaurant
			              return{ resto};
						});
						console.log("before save:" +this.state.restaurant);
					
	}
	handleSave(e){
		console.log("before save:" +this.state.restaurant);
		this.props.onSave(this.state.restaurant);
		this.setState({
			restaurant:Object.assign({},Init_value),
			 error:{}});
			 
			e.preventDefault();
	}
	
	render(){

		return(
		<form className="inputform">
		    <div>
		    <h4>Add new Restaurant <FontAwesomeIcon  icon={faBars} /></h4>
        
			
			</div>
			<div className = "inputcontainer ">
			    
					<input className ="InputItem restaurant-name"
					 type="text" name="restaurantName" placeholder="Name" value={this.state.restaurant.restaurantName}
					 onChange={this.handlechange}/>
			</div>
			<div className = "inputcontainer adress">
                
                    <textarea className ="InputItem" name="address" rows="4" cols="18" placeholder="Adress" value={this.state.restaurant.address}
					onChange={this.handlechange}>
				    </textarea>
			</div>
			 <input className = "inputitem submitbutton" type="submit" value="submit" onClick={this.handleSave}/>
        </form>
		
		);
	}
}
export default Inputform;