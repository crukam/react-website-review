import React from 'react';
import CommentInput from './commentInput.jsx';
import './comment.css';
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
       // console.log(this.state.showcommentInput);
       // console.log(this.props.ratings);
       // let list=[];
       // this.props.ratings.forEach((item)=>{
           // list.push(<p className="comment-item" >{item.comment}</p>)})
       // console.log(list);
        return(
            <div className="comment-wrapper">
                <h3 className="myresto-title">custumers feedback</h3>
                
               {this.getCommentforrender()}
               {this.state.showcommentInput?<CommentInput onClick={this.handlesaveInput} ></CommentInput>:null}
               {this.state.showcommentInput?null:<button onClick={this.handledisplayInput}>add comment</button>}
               
            </div>
        )
    }
}
export default Comment