import axios from 'axios';
import * as actionTypes from './actionTypes';
import {DELETE_CONTACTS } from "../../../../config/api";
import { message } from 'antd';

export const onSelect =(id,value)=>{
    return{
        type:actionTypes.ON_SELECT,
        value,
        id
    }
}
export const getData=(value)=>{
    return{
        type:actionTypes.GET_DATA,
        value
    }
}
export const onsubmit=()=>{
    return (dispatch,getState)=>{
        const {
         site:site,
         ispublic:ispublic,
         empno:empno,
         sex:sex,
         emptype:emptype
        }
        =getState().SearchSpecialReducer.SearchSpecialPersonReducer;

        if(site==undefined&&ispublic==undefined&&empno==undefined&&sex==undefined&&emptype==undefined){
            message.warning('查詢條件不能全部為空')
       }else{
        axios.get({url:DELETE_CONTACTS},{site,ispublic,empno,sex,emptype}).then((res)=>{
            if(res.data.code==1){
                return dispatch(getData(res.data.data))
            }else{
                message.warning(res.message)
            }
        }).catch((err)=>{
            console.log('err')
        })
    }
    }
}
