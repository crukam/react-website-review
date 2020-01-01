import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faBars,faWindowClose} from '@fortawesome/free-solid-svg-icons';
import './restaurantInput.css';
const iconStyle = {
    height:'80%',
    width:'5%',
    margin:'1%'
};
class Inputname extends React.Component{
	constructor(props){
		super(props);
		this.handlechange=this.handlechange.bind(this);
		this.handleSave=this.handleSave.bind(this);
		this.state={
			restoname:''
		}

	}
	handlechange(e){
		
		this.setState({restoname:e.target.value});
	}
	handleSave(e){
		this.props.fetchrestoname(this.state.restoname);
		this.setState({restoname:''});
		/*console.log("before save:" +this.state.restaurant);
		this.props.onSave(this.state.restaurant);
		this.setState({
			restaurant:Object.assign({},Init_value),
			 error:{}});
			 
			e.preventDefault();*/
	}
	
	render(){
       
		return(
		<div className="inputform">
		
		    <h4 className="inputtitle">Add Restaurant name <FontAwesomeIcon style={iconStyle}  icon={faBars} /><FontAwesomeIcon style={iconStyle} icon={faWindowClose} /></h4>
            <div className = "inputcontainer ">
			    <input className ="InputItem restaurant-name"
					 type="text" name="restoname" placeholder="Name" value={this.state.restoname}
					 onChange={this.handlechange}/>
			</div>
			<input className = "inputitem submitbutton" type="submit" value="add" onClick={this.handleSave} />
        </div>
		
		);
	}
}
export default Inputname;