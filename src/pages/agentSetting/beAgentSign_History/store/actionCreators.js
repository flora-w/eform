import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getPageDatatab =(data)=>{
return ({
    type:actionTypes.GET_DATA,
    data
 
}) 
//  ,console.log(data)
}

export const getPageData=()=>{
    
    return(dispatch)=>{
        axios.get('./api/beAgentSignHistory.json').then((res)=>{
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