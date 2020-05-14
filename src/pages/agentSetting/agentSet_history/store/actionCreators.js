import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getPageDatatab =(data)=>{
return ({
    type:actionTypes.AGENT_PAGE_DATA,
    data
 
}) 
//  ,console.log(data)
}

export const getPageData=()=>{
    
    return(dispatch,getState)=>{
        axios.get('./api/AgentSetHistory.json').then((res)=>{
            if(res.data.code===1){
              dispatch(getPageDatatab(res.data.data))
            //   console.log(res.data.idata);
            }else{
                console.log('err');
                
            }
        }).catch((err)=>{
           console.log(err);
        })
    }
}