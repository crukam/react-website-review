import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faBars} from '@fortawesome/free-solid-svg-icons';
import './restaurantInput.css';
let Init_value={restaurantName:'',address:'',lat:'',long:'',ratings:[{star:'',comment:''}]}
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
			              return{restaurant:prevState.restaurant};
		                });
	}
	handleSave=(e)=>{
		
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
			<div className = "inputcontainer rating">
                     Ratings
					<select >
					<option> </option>
					<option >0 </option>  
					<option >1</option>  
					<option>2</option>
					<option>3</option>
					<option>4</option><option>5</option>  
					</select> 
			</div>
			<div className = "inputcontainer">
                <textarea className ="InputItem" rows="4" cols="18" placeholder="comment">
				</textarea>
			</div>
            <input className = "inputitem submitbutton" type="submit" value="submit" onClick={this.handleSave}/>
        </form>
		
		);
	}
}
export default Inputform;