import React from 'react';
import './googleFetcher.css';

class GoogleFetcher extends React.Component{
   
    
    
       render(){
       
       // console.log(this.getrestoData());
         return ( <button className="place-fetcher" onClick={()=>this.props.handlefetch()}>
                    Goggle place
                     </button>
                  )
    }
}
export default GoogleFetcher;