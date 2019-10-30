import React from 'react';
import './restaurantFilters.css'
class Filter extends React.Component{
	constructor(props){
		super(props);
		this.handlefilter=this.handlefilter.bind(this);
	}
	
	handlefilter(e){
	 e.target.className==="min_option"? this.props.getmin_filter(e.target.value):this.props.getmax_filter(e.target.value);
	}

	render(){
		return(
		<div className="filterContainer">
		    <div className="label"><b>Rating from  :</b>
			  <select className="filterselect" >
			      <option className="min_option" value="0" onChange={this.handlefilter}>0</option>
				  <option className="min_option" value="1" onChange={this.handlefilter}>1</option>
				  <option className="min_option" value="2" onChange={this.handlefilter}>2</option>
				  <option className="min_option" value="3" onChange={this.handlefilter}>3</option>
				  <option className="min_option" value="4" onChange={this.handlefilter}>4</option>
				  <option className="min_option" value="5" onChange={this.handlefilter}>5</option>
			  </select>
			  to
			  <select className="filterselect">
			      <option className="max_option" value="5" onChange={this.handlefilter}>5</option>
				  <option className="max_option" value="0" onChange={this.handlefilter}>0</option>
				  <option className="max_option" value="1" onChange={this.handlefilter}>1</option>
				  <option className="max_option" value="2" onChange={this.handlefilter}>2</option>
				  <option className="max_option" value="3" onChange={this.handlefilter}>3</option>
				  <option className="max_option" value="4" onChange={this.handlefilter}>4</option>
			  </select>
			</div>
		</div>
		);
	}
}
export default Filter;