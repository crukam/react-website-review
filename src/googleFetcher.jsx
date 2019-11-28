import React from 'react';
import './googleFetcher.css';
let googleRestaurants=require('./googleData.json');
class GoogleFetcher extends React.Component{
   
    
   getrestoData=function (){
      let temp=[];
      googleRestaurants.forEach((item)=>
                       {
                     
                          let data={
                                     name:item.name,
                                     adress:item.vicinity, 
                                     location:item.geometry.location, 
                                     rating:item.rating
                                   }
                         temp.push(data);   
                    
                  
                });
       return temp;

   
       
    }
 
    render(){
       
        console.log(this.getrestoData());
         return ( <button className="place-fetcher">
                      Google Place
                     </button>
                  )
    }
}
export default GoogleFetcher;