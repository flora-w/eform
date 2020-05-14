import axios from 'axios';
import * as actionTypes from './actionTypes';
import { actionCreators } from '.';
import {DELETE_CONTACTS } from "../../../../config/api";
import { types } from '@babel/core';
import { message } from 'antd';

let typeArr = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];


export const selecttype =(value)=>{
    return{
        type:actionTypes.SELECT_TYPE,
        value
    }

}
export const isPublic =(value)=>{
    return{
        type:actionTypes.IS_PUBLIC,
        value
    }

}
export const showBtnState=(data)=>{
    return{
        type:actionTypes.SHOW_BTN,
        data
    }
}
const fileType=(file)=>{
    console.log(file.type);
    // console.log('1212')
    let type=file.type;
    let temp=null;
    let index=0;
    for(let i of typeArr){
        if(i !==type){
            index ++;
        }
    }
    if(index !==typeArr.length){
        temp=file;
        return temp
    }
    else{
        message.warn('請使用.xls');
        showBtnState(false)
    }
}

export const saveUploadFile =(file)=>{
    // console.log(file)
    let data=fileType(file);
    // console.log(data)
     return{
         type:actionTypes.SAVEUPLOAD_FILE,
         data
     }

}
export const getPagedataSecondb =(data)=>{
    return{
        type:actionTypes.GET_PAGE_DATA_SECOND,
        data
    }
}

export const submit=(value)=>{
    const data={

    }
    return (dispatch)=>{
     axios.post({url:DELETE_CONTACTS},value).then((res)=>{
        
     }).catch((err)=>{
         console.log('errr');
     })
    }
}

export const upLoad =()=>{
    return(dispatch,getState)=>{
     let formData=new FormData();
     formData.append('User_id',sessionStorage.getItem('userId'));
     formData.append('file',getState().addPersonReducer.addSpecialPersonReducer.upLoad);
    //    console.log(formData.get('file'))
     axios.post({url:DELETE_CONTACTS},formData).then((res)=>{
         if(res.code==1){
             message.show('上傳成功');
             dispatch(showBtnState(false))
             dispatch(getPagedataSecond())
         }else{
             message.warn(res.message);
         }
     })
    }
}

export const getPagedataSecond =()=>{
    return(dispatch)=>{
        const User_id=sessionStorage.getItem('userId');
        axios.get({url:DELETE_CONTACTS},User_id).then((res)=>{
            if(res.code==1){
                dispatch(getPagedataSecondb(res.data.data));
            }else{
                message.warning(res.message)
            }
        }).catch((err)=>{
            message.warning('頁面加載數據出錯');

        })
    }
}