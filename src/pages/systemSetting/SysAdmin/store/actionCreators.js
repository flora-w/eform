import axios from 'axios';
import * as actionTypes from './actionTypes';
import { message } from 'antd';
import {DELETE_CONTACTS } from "../../../../config/api";


export const showModal = () => {
    return {
      type: actionTypes.SHOW_MODAL
    }
  }
export const modifyModal =(record)=>{
  return{
    type:actionTypes.MODIFY_MODAL,
    record
  }
}
  export const hideModal=()=>{
      return{
      type:actionTypes.HIDE_MODAL
  }
}
export const modifycancel=()=>{
  return{
    type:actionTypes.MODIFY_CANCEL
  }
}
  export const asyncGetName = (name) => ({
    type: actionTypes.GET_NAME,
    name,
    // setName
  })

  const asyncAddData = (data) =>{
    return ({
      type:actionTypes.ADD_DATA,
      data
    }),
    console.log(data)
  }
  export const getName=(value)=>{
      const id=value
      return (dispatch)=>{
          axios.get({url:DELETE_CONTACTS,getName,id}).then((res)=>{
              if(res.data.code===1){
              dispatch(asyncGetName(res.data.data))
              }else{
                  console.log('errrr')
              }
          }).catch((err)=>{
            //   console.log('err')
          })
      }
  }

  export const getPageDatatab =(data)=>{
    return ({
        type:actionTypes.PAGE_DATA,
        data
     
    }) 
    //  ,console.log(data)
    }
    
export const addAuthOk1 =(value)=>{

     return (dispatch)=>{
         axios.post({url:DELETE_CONTACTS,value}).then((res)=>{
             if(res.data.code===1){
             dispatch(asyncAddData())
             }else{
                 console.log('err')
             }
         }).catch((err)=>{
             console.log('err');
         })
     }
}

export const getPageData=()=>{
    
    return(dispatch,getState)=>{
        axios.get('./api/Admin.json').then((res)=>{
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
export const modifyok1 =(values)=>{

  return (dispatch)=>{
      axios.post({url:DELETE_CONTACTS,values}).then((res)=>{
          if(res.data.code===1){
          dispatch(getPageDatatab())
          }else{
              console.log('err')
          }
      }).catch((err)=>{
          console.log('err');
      })
  }
}
