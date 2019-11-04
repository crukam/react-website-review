import React from 'react';
import CommentInput from './commentInput.jsx';
import './comment.css';
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.handledisplayInput=this.handledisplayInput.bind(this);
        this.state={showcommentInput:false}
    }
    handledisplayInput(){
        this.setState({showcommentInput:true})
    }
    
    render(){
        let list=[];
        this.props.ratings.forEach((item,index)=>{
            list.push(<p className="comment-item" key={index}>{item.comment}</p>)})
        return(
            <div className="comment-wrapper">
                <h3 className="myresto-title">custumers feedback</h3>
               {list}
               {this.state.showcommentInput?<CommentInput></CommentInput>:null}
               <button onClick={this.handledisplayInput}>add comment</button>
               
            </div>
        )
    }
}
export default Comment