import axios from 'axios';
import * as actionTypes from './actionTypes';
import {DELETE_CONTACTS } from "../../../../config/api";

export const getData=(data)=>{
    return{
        type:actionTypes.GET_DATA,
        data
    }
}

export const getRankList1=(data)=>{
    return{
        type:actionTypes.GET_RANK,
        data
    }
}

export const submit =(values)=>{
    return(dispatch)=>{
       axios.post({url:DELETE_CONTACTS},values).then((res)=>{
           if(res.data.code==1){
               dispatch(getData(res.data.data))
           }else{
               console.log('err')
           }
       }).catch((err)=>{
           console.log('err')
       })
    }
}
export const getRankList =(values)=>{
    return(dispatch)=>{
       axios.post({url:DELETE_CONTACTS},values).then((res)=>{
           if(res.data.code==1){
               dispatch(getRankList1(res.data.data))
           }else{
               console.log('err')
           }
       }).catch((err)=>{
           console.log('err')
       })
    }
}