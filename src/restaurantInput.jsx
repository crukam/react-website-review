import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faBars} from '@fortawesome/free-solid-svg-icons';
import './restaurantInput.css'
class Inputform extends React.Component{
	render(){
		return(
		<form className="inputform">
		    <div>
		    <h4>Add new Restaurant <FontAwesomeIcon  icon={faBars} /></h4>
        
			
			</div>
			<div className = "inputcontainer ">
			    
			        <input className ="InputItem restaurant-name" type="text" name="name" placeholder="Name"/>
			</div>
			<div className = "inputcontainer adress">
                
                    <textarea className ="InputItem" rows="4" cols="18" placeholder="Adress">
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