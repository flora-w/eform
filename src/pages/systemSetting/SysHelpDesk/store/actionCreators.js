import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getData1 =(data)=>{
    return{
        type:actionTypes.GET_DATA,
        data
    }
}


export const getData =()=>{
    return(dispatch)=>{
        axios.get('./api/SystemHelp.json').then((res)=>{
            if(res.data.code==1)  {
                 dispatch(getData1(res.data.data))
            }else{
                console.log('err')
            }
        }).catch((err)=>{
            console.log('err');
        })
    }
}