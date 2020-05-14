import * as actionTypes from './actionTypes';
import { getFormData } from './actionCreators';

const defaultState={
    data:[],
    name:'',//被代理人部门,
    allform:[],
    alldepts:[],
    agent:['a','b'],
}

const getFormDatab=(newState,action)=>{
    newState.data=action.data;
    newState.name=sessionStorage.getItem('user');
    return newState;
}
const getAllDeptb =(newState,action)=>{
    newState.alldepts=action.data;
       return newState;
  }
const getFormNameb =(newState,action)=>{
    newState.allform=action.data;
       return newState;
  }
  const submitb =(newState,action)=>{
    newState.data=action.data;
       return newState;
  }
export default(state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case actionTypes.FORM_DATA:
            return getFormDatab(newState,action)
        case actionTypes.GET_ALL_DEPT:
            return getAllDeptb(newState,action);
        case actionTypes.GET_ALL_FORM:
            return getFormNameb(newState,action);
        case actionTypes.SUBMIT_DATA:
            return submitb(newState,action);
        default:
            return newState;
    }
}