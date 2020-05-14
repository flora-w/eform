import axios from 'axios';
import * as actionTypes from './actionTypes';
import{message} from 'antd';
import *  as store from '../store';
import {SING_LIST } from "../../../../config/api"



export const currPage=(id)=>{
    return({
        type:actionTypes.CURR_PAGE,
        id
    })
   console.log("actioncreator")
};

export const asyncGetPageData=(data)=>{
    // console.log("wel");
    console.log(data);
    return ({
        type:actionTypes.SIGN_PAGE_DATA,
        data,
    })
    // ,console.log(data);
}
export const getPageData =(id)=>{
    return (dispatch)=>{
        if(id==0){
        axios.get('./api/sign0.json').then((res)=>{
            if(res.data.code==1){
           dispatch(asyncGetPageData(res.data));
            }else{
                message.warning(res.message);
            }
        }).catch((err)=>{
           console.log(err);
        })
    }else if(id==1){
        axios.get('./api/sign1.json').then((res)=>{
            if(res.data.code==1){
            dispatch(asyncGetPageData(res.data));
            }else{
                message.warning(res.message);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    }

}
