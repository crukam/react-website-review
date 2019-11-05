import React from 'react';
import './comment.css';
class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state={star: 0,comment:''}
    }
    handlestarchange(e){
      this.setState({star:e.target.value});
    }
    handlecommentchange(e){

    }
    
    render(){
        return(
        <div className="input-wrapper">
            
           
			
            <div className = "inputcontainer rating">
                     Ratings
					<select onChange={this.handlestarchange} >
					<option> </option>
					<option >0 </option>  
					<option >1</option>  
					<option>2</option>
					<option>3</option>
					<option>4</option>
                    <option>5</option>  
					</select> 
			</div>
            <div className = "inputcontainer" onChange={this.handlecommentchange}>
                <textarea className ="InputItem" rows="4" cols="16" placeholder="comment">
				</textarea>
			</div>
            
            <button onClick={this.props.onClick}>save</button>
        </div>
        );
    }
}
export default CommentInput;