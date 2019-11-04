import React from 'react';
import './restaurantFilters.css'
class Filter extends React.Component{
	constructor(props){
		super(props);
		this.handlefilter=this.handlefilter.bind(this);
	}
	
	
	handlefilter(e){

	 e.target.className==="filtermin"? this.props.getmin_filter(e.target.value):this.props.getmax_filter(e.target.value);
	}

	render(){
		return(
		<div className="filterContainer">
		    <div className="label"><b>Rating from  :</b>
			  <select className="filtermin" onChange={this.handlefilter} >
			      <option className="min_option" value="0" >0</option>
				  <option className="min_option" value="1" >1</option>
				  <option className="min_option" value="2">2</option>
				  <option className="min_option" value="3" >3</option>
				  <option className="min_option" value="4" >4</option>
				  <option className="min_option" value="5" >5</option>
			  </select>
			  to
			  <select className="filtermax" onChange={this.handlefilter}>
			      <option className="max_option" value="5" >5</option>
				  <option className="max_option" value="0" >0</option>
				  <option className="max_option" value="1" >1</option>
				  <option className="max_option" value="2" >2</option>
				  <option className="max_option" value="3" >3</option>
				  <option className="max_option" value="4" >4</option>
			  </select>
			</div>
		</div>
		);
	}
}
export default Filter;