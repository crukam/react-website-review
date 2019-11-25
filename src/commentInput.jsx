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
        console.log("restaurant before call back:"+ this.state.rating );
        this.props.onClick(this.state.rating);
        this.setState({rating:Object.assign({},commentInit)});
        console.log("restaurant call back:"+ this.state.rating );
    }
    handleChange(e){
        let name=e.target.name;
        let value= e.target.value;
        this.setState((prevState)=>{
            
            prevState.rating[name]=value;
            return({rating:prevState.rating});

        });
    }
    
    
    render(){
        return(
        <div className="input-wrapper">
             <div className = "inputcontainer rating">
                    <label>Ratings</label>
					<select name="rating" value={this.state.rating.star} onChange={this.handleChange}>
					<option value="0" >0 </option>  
					<option value="1">1</option>  
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
                    <option value="5">5</option>  
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