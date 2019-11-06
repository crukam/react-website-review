import React from 'react';
import './comment.css';
    
const commentInit={star:0,comment:''};
class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.handleInputsave=this.handleInputsave.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={rating:Object.assign({},commentInit)}
    }
    handleInputsave(){
        this.props.onClick(this.state.rating);
        this.setState({rating:Object.assign({},commentInit)});
    }
    handleChange(e){
        let name=e.target.name;
        let value= e.target.value;
        this.setState((prevState)=>{
            
            prevState.rating[name]=value;
            return({product:prevState.rating});

        });
    }
    
    
    render(){
        return(
        <div className="input-wrapper">
             <div className = "inputcontainer rating">
                    <label>Ratings</label>
					<select name="rating" value={this.state.rating.star} onChange={this.handleChange}>
					<option> </option>
					<option >0 </option>  
					<option >1</option>  
					<option>2</option>
					<option>3</option>
					<option>4</option>
                    <option>5</option>  
					</select> 
			</div>
            <div className = "inputcontainer"  >
                <textarea className ="InputItem" name="comment" rows="4" cols="16" placeholder="comment"onChange={this.handleChange} value={this.state.rating.comment}>
				</textarea>
			</div>
            
            <button onClick={this.handleInputsave}>save</button>
        </div>
        );
    }
}
export default CommentInput;