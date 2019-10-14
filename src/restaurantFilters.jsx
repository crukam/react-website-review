import React from 'react';
import './restaurantFilters.css'
class Filter extends React.Component{
	render(){
		return(
		<div className="filterContainer">
		    <div className="label"><b>Rating from  :</b>
			  <select className="filterselect">
			      <option>0</option>
				  <option>1</option>
				  <option>2</option>
				  <option>3</option>
				  <option>4</option>
				  <option>5</option>
			  </select>
			  to
			  <select className="filterselect">
			      <option>5</option>
				  <option>0</option>
				  <option>1</option>
				  <option>2</option>
				  <option>3</option>
				  <option>4</option>
			  </select>
			</div>
		</div>
		);
	}
}
export default Filter;