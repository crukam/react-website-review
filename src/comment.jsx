import React from 'react';

class Comment extends React.Component{
    comments=()=>{return(this.props.ratings.map(
        (item)=>(<p class="comment">{item.comment}</p>) ));}
   

render(){
    return(<div class="commentWrapper">
     {this.comments()}
    </div>)
}
}
export default Comment;