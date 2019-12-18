import React from 'react';
import CommentInput from './commentInput.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  { faWindowClose,faBars} from '@fortawesome/free-solid-svg-icons';
import './comment.css';
const iconStyle = {
    height:'80%',
    width:'5%',
    margin:'1%'
};
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.handlesaveInput=this.handlesaveInput.bind(this);
        this.handledisplayInput=this.handledisplayInput.bind(this);
        this.state={showcommentInput:false}
    }
    
    handledisplayInput(){
        this.setState({showcommentInput:true})
    }
    handlesaveInput(rating){
        this.setState({showcommentInput:false});
        this.props.onratingSave(rating);
    }
    getCommentforrender=()=>{
        return this.props.ratings.map(
        (item)=>{return <p className="comment-item" >{item.comment}</p> }
        );
    }
    
    render(){
      
        return(
            <div className="comment-wrapper">
                <div className="crud-div" ><FontAwesomeIcon style={iconStyle} icon={faBars}/><FontAwesomeIcon style={iconStyle} icon={faWindowClose} /></div>
                <div className="myresto-title">
                 <h2 className="resto-name" >{this.props.name} </h2>
                 <div>{this.props.adress}</div>
                </div>
            
              <div className="comment-data">
                 {this.getCommentforrender()}
                 {this.state.showcommentInput?<CommentInput onClick={this.handlesaveInput} ></CommentInput>:null}
                 {this.state.showcommentInput?null:<button onClick={this.handledisplayInput}>add comment</button>}
             </div>  
              
            </div>
        )
    }
}
export default Comment