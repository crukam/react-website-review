import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faBars} from '@fortawesome/free-solid-svg-icons';
import './restaurantInput.css'
let Init_value={restaurantName:'',address:'',lat:'',long:'',ratings:[{star:'',comment:''}]}
class Inputform extends React.Component{
	constructor(props){
		super(props);
		this.state={
			restaurant:Object.assign({},Init_value),
		     error:{}}

	}
	
	render(){

		return(
		<form className="inputform">
		    <div>
		    <h4>Add new Restaurant <FontAwesomeIcon  icon={faBars} /></h4>
        
			
			</div>
			<div className = "inputcontainer ">
			    
			        <input className ="InputItem restaurant-name" type="text" name="name" placeholder="Name" value={this.state.restaurant.restaurantName}/>
			</div>
			<div className = "inputcontainer adress">
                
                    <textarea className ="InputItem" rows="4" cols="18" placeholder="Adress" value={this.state.restaurant.address}>
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
            <input className = "inputitem submitbutton" type="submit" value="submit"/>
        </form>
		
		);
	}
}
export default Inputform;