import React from 'react';

import './comment.css'
class Comment extends React.Component{
    
    render(){
        let list=[];
        this.props.ratings.forEach((item,index)=>{
            list.push(<p className="comment-item" key={index}>{item.comment}</p>)})
        return(
            <div className="comment-wrapper">
                
            {list}
            </div>
        )
    }
}
export default Comment