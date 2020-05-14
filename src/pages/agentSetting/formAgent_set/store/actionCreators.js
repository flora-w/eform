import axios from 'axios';
import * as actionTypes from './actionTypes';
import { Record } from 'immutable';
import { message } from 'antd';
import {DELETE_CONTACTS } from "../../../../config/api";



const getFormDatab=(data)=>{
    return{
        type:actionTypes.FORM_DATA,
        data
    }
}
export const getFormNameb =(data)=>{
    return {
        type:actionTypes.GET_ALL_FORM,
        data
    }
  }
  export const getDeptAgentb =(data)=>{
    return {
        type:actionTypes.GET_DEPT_AGENT,
        data
    }
  }
  export const getAllDeptb =(data)=>{
    return {
        type:actionTypes.GET_ALL_DEPT,
        data
    }
  }

  export const submitb =(data)=>{
    return {
        type:actionTypes.SUBMIT_DATA,
        data
    }
  }
export const getFormData=()=>{
    return(dispatch)=>{
        axios.get('./api/FormAgent.json').then((res)=>{
           if(res.data.code ===1){
               dispatch(getFormDatab(res.data.data));
           }else{
             console.log('err');
           }
        }).catch((err)=>{

        })
    }
}

export const actionCreators=(record,index)=>{
   let data ={
       record,
       index
   }

    return (dispatch)=>{
        axios.post({url:DELETE_CONTACTS,data}).then((res)=>{
            if(res.data.code===1){
                message.success('删除成功')
                dispatch(actionCreators.getFormDatab())
            }else{
                message.warning(data.message)
            }
        }
        ).catch((err)=>{
            console.log('删除失败',err)
        })
    }
}

export const getFormName=()=>{
    return(dispatch)=>{
        axios.get('./api/formname.json').then((res)=>{
          if(res.data.code===1){
            dispatch(getFormNameb(res.data.data))
          }else {
                console.log('err')
          }
        }).catch((res)=>{
  
        })
    }
  }  
  export const getAllDept=()=>{
    return(dispatch)=>{
        axios.get('./api/dept.json').then((res)=>{
          if(res.data.code===1){
            dispatch(getAllDeptb(res.data.data))
          }else {
                console.log('err')
          }
        }).catch((res)=>{
  
        })
    }
  } 
  export const getDeptAgent=(value)=>{
    return(dispatch)=>{
        axios.post({url:DELETE_CONTACTS,value}).then((res)=>{
          if(res.data.code===1){
            dispatch(getDeptAgentb(res.data.data))
          }else {
                console.log('err')
          }
        }).catch((res)=>{
  
        })
    }
  } 
  export const submit=(value,that)=>{
    return(dispatch)=>{
        axios.post({url:DELETE_CONTACTS,value}).then((res)=>{
          if(res.data.code===1){
            dispatch(submitb(res.data.data));
            that.history.replace('/agent-setting');
          }else {
                console.log('err')
          }
        }).catch((res)=>{
  
        })
    }
  }