import axios from 'axios';
import * as actionTypes from './actionTypes';
import { Record } from 'immutable';
import { message } from 'antd';
import {DELETE_CONTACTS } from "../../../../config/api";


 export const getFinanceDatab =(data)=>{
    return {
        type:actionTypes.FINANCE_DATA,
        data
    }
  }
export const getAgentDatab =(data)=>{
  return {
      type:actionTypes.PERSONALAGENT_DATA,
      data
  }
}

export const getDeptb =(data)=>{
  return{
    type:actionTypes.GET_DEPT,
    data
  }
}
export const getAllDeptb =(data)=>{
  return {
      type:actionTypes.GET_ALL_DEPT,
      data
  }
}
export const getDeptAgentb =(data)=>{
  return {
      type:actionTypes.GET_DEPT_AGENT,
      data
  }
}
export const submitb =(data)=>{
  return {
      type:actionTypes.SUBMIT_DATA,
      data
  }
}

//财务代理人设定状况
export const getFinanceData=()=>{
   return(dispatch)=>{
       axios.get('./api/FinanceAgent.json').then((res)=>{
         if(res.data.code===1){
           dispatch(getFinanceDatab(res.data.data))
         }else {
               console.log('err')
         }
       }).catch((res)=>{

       })
   }
}   
//目前个人代理设定
export const getAgentData=()=>{
  return(dispatch)=>{
      axios.get('./api/PersonalAgent.json').then((res)=>{
        if(res.data.code===1){
          dispatch(getAgentDatab(res.data.data))
        }else {
              console.log('err')
        }
      }).catch((res)=>{

      })
  }
}   
//删除代理信息
export const deleteFamilyInfo=(record,index)=>{
  let data={
    record,index
  }
  return(dispatch)=>{
    axios.post({url:DELETE_CONTACTS,data}).then((res)=>{
      if(res.data.code===1){
        message.success('删除成功');
        dispatch(getAgentDatab())
      }else{
        message.warning(res.message);
      }
    })
    .catch((err)=>{
      console.log('删除失败',err)
    })
  }
}

export const getDept=()=>{
  const id=sessionStorage.getItem('userID');
  return(dispatch)=>{
    axios.post({url:DELETE_CONTACTS,id}).then((res)=>{
      if(res.data.code===1){
        dispatchEvent(getDeptb())
      }else{
        message.warning(res.message);
      }
    }).catch((err)=>{
      console.log('err',err);
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
  // console.log(that);
  return(dispatch)=>{
      axios.post({url:DELETE_CONTACTS,value}).then((res)=>{
        if(res.data.code===1){
          that.history.push('/agent-setting');
          dispatch(submitb(res.data.data))
        }else {
              console.log('err')
        }
      }).catch((res)=>{

      })
  }
}