import React from 'react';
import CommentInput from './commentInput.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  { faWindowClose,faBars,faStar} from '@fortawesome/free-solid-svg-icons';
import './restaurant.css';
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
        this.state={showcommentInput:false,data:null}
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
    getStreetVieuw=(position)=>{
       return 'https://maps.googleapis.com/maps/api/streetview?location='+position.lat+','+position.lng+'&size=300x200&fov=80&heading=70&pitch=0&key=AIzaSyDdc8rD8-iI6ZMvSGakZ1ZJ5wkOzUFRWiI';
       
    }
    
    render(){
        
      
        return(
            <div className="comment-wrapper">
                <div className="crud-div" ><FontAwesomeIcon style={iconStyle} icon={faBars}/><FontAwesomeIcon style={iconStyle} icon={faWindowClose} onClick={this.props.hidecomment} /></div>
                <div className="myresto-title">
                <img src={this.getStreetVieuw(this.props.resto.position)} alt='restaurant'/>
                 <h2 className="resto-name" >{this.props.resto.name} </h2>
                 <div>{this.props.resto.adress}</div>
                 <div>{this.props.resto.rating[0].rating}<div className="star-outer" >
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <FontAwesomeIcon icon={faStar} />
                                                                             <div className="star-inner" style={{width:this.props.resto.rating[0].rating *20+'%'}}>
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                                 <FontAwesomeIcon icon={faStar} />
                                                                             </div>
                         </div>                                               </div>
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