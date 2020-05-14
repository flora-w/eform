import axios from 'axios';
import * as actionTypes from './actionTypes';
import{message} from 'antd';
import {WAIT_FOR_SIGN_SUBMIT} from '../../../../config/api';


const asyncFormIdClick =(data,title)=>{
    return {
        type:actionTypes.FORMID_CLICK,
        data,
        title    
  }
}

const asyncSubmitData = () => ({
    type: actionTypes.SUBMIT_SUCCESS
  })

export const formIdClick=(id,title) =>{
    return (dispatch) =>{
       axios.get('/api/FormDetail.json').then((res)=>{
           if(res.data.code===1){
               dispatch(asyncFormIdClick(res.data,title))
           }
        //  console.log(res.data);
       }).catch((res)=>{
           message.warning(res.message);
       })
    }
}

export const submitData=(values,formId,that)=>{
    let data={
        sFormSerialID:formId,
        sSignerID:sessionStorage.getItem('userID'),
        sResultID:values.result,
        sResultName:values.result ===1?'同意':'驳回',
        sComment:values.suggestion ?values.suggestion:''
    }
    return dispatch=>{
        console.log(data);
        axios.post({url: WAIT_FOR_SIGN_SUBMIT, data})
        .then((data)=>{
          
            if(data.code===1){
                that.props.history.replace('/sign/0');
                dispatch(asyncSubmitData())
            }else{
                that.props.history.replace('/sign/0');
                message.info(data.message);
            }

        })
        .catch((err)=>{
            message.warning('请求数据时错误')
            console.log(err)
        })
    }
}