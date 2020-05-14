import axios from 'axios';
import  * as actionTypes from './actionTypes';
import {DELETE_CONTACTS } from "../../../../config/api";




export const changeMode = (data) => {
    return{
    type: actionTypes.CHANGE_MODE,
    data
  }
}
export const getData =(data)=>{
  return{
    type:actionTypes.GET_DATA,
    data
  }
}
export const submitFirst =(value)=>{
  let data={
     site:value.site1,
     proid:value.proid,
     newid:value.newid,
     startdate:value.startdate
  }
  return(dispatch)=>{
    axios.post({url:DELETE_CONTACTS},data).then((res)=>{
      if(res.data.code===1){
      return getData(res.data.data)
      }else{
        console.log('err')
      }
    }).catch((err)=>{
      console.log('err')
    })
  }
}