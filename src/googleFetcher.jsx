import React from 'react';
import './googleFetcher.css';
let googlefetchdata=require('./googleData.json');

class GoogleFetcher extends React.Component{
   formatJsondata=()=>{
   return googlefetchdata.map((item,index)=>{
      let data={
         name:item.name,
         adress:item.vicinity,
         rating:item.rating
      }
      return data;
   });
   }
   
   formatdata=()=>{
      return googlefetchdata.map(
         (item,index)=>{
            return (<div key={index} className="resto-wrapper">
                     <img src={item.photos} alt =""></img>
                     <div className="name-div">{item.name}</div>
                     <div className="adress-div">{item.vicinity}</div>
                     <div className="rating">{item.rating}</div>
                   </div>);
         }
      )
   }
    
    
       render(){
      // console.log(this.formatJsondata());
      if(!this.props.fetchresto ) { 
         return (
                 <button className="place-fetcher" onClick={()=>this.props.handlefetch()}>
                    Goggle place
                 </button>
                )
            }else{
               return(
                     <div className="data-wrapper">
                         {this.formatdata()}
                     </div>
                     )
               
            }
        
    }
}
export default GoogleFetcher;