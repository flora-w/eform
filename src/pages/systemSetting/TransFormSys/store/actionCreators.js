import axios from 'axios';
import * as actionTypes from './actionTypes';
import {DELETE_CONTACTS } from "../../../../config/api";

export const submiform1 =(data)=>{
    return{
        type:actionTypes.SUBMIT_FORM,
        data
    }
}
export const getReasonType =(data)=>{
    return{
        type:actionTypes.GET_TYPE,
        data
    }
}
export const getSequenceid=(values)=>{
    return{
        type:actionTypes.GET_ID,
        values
    }
}
export const submiform =(values)=>{
   return(dispatch)=>{
       dispatch(getSequenceid(values));
       axios.get({url:DELETE_CONTACTS},values).then((res)=>{
           if(res.data.code===1){
           dispatch(submiform1(res.data.data))
           }else{
               console.log('err')
           }
       }).catch((err)=>{
           console.log('err')
       })
   }
}
export const submitFormTrans =(values,history)=>{
  
    return(dispatch)=>{
        axios.post({url:DELETE_CONTACTS},values).then((res)=>{
            if(res.data.code==1){
                history.replace('/system-setting')
            }else{
                console.log('err')
            }
        }).catch((err)=>{
            console.log('err');
        })
    }
}