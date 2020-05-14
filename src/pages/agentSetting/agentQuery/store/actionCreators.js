import axios from 'axios';
import  * as actionTypes from './actionTypes';
import {
PUBLISHING_SEARCH_PAGE_INFO } from "../../../../config/api";
import { message } from 'antd';
import { actionCreators } from '.';

export const onInput =(id,value)=>{

    return{
        type:actionTypes.INPUT_DATA,
        value,
        id
    }
}

export const publishSearchCun =(data)=>{
    return{
        type:actionCreators.DATA_SEARCH,
        data
    }
}


export const publishSearch=()=>{
    return(dispatch,getState) =>{
        // console.log(getState());//getState方法获取reducer里定义的数据值
        // const {
        //     empno:empno,
        //     chname: chname,
        //     enname:enname,
        //     agentEmpno:agentEmpno,
        //     agentChName:agentChName,
        //     agentEnName:agentEnName
        // }=getState().agentQueryReducer.agentSetQueryReducer;
        const result=getState().agentQueryReducer.agentSetQueryReducer;
        console.log(result);
         axios.post({
             url:PUBLISHING_SEARCH_PAGE_INFO,
             result    
         }).then((data)=>{
             if(data.code===1){
                 dispatch(publishSearchCun(data.data))
             }else{
                 message.warning(data.message);
             }
         })
         .catch((err)=>{
             message.warn('获取页面时候错误');
             console.log(err);
         })
    }
}