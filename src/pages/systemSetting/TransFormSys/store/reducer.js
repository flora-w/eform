

import * as actionTypes from './actionTypes'; 
import { getSequenceid } from './actionCreators';


const defaultState ={
  data:[],
  reasonsome:'',
  test:'',
  sequenceid:'',
};
const submit =(newState,action)=>{
  newState.data=action.data;
  return newState;
}
const getReasonType1 =(newState,action)=>{
  newState.reasonsome=action.data;
  return newState;
}
const getSequenceid1 =(newState,action)=>{
  newState.sequenceid=action.values.sequenceid;
  return newState;
}


export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
    case actionTypes.SUBMIT_FORM:
      return submit(newState,action);
    case actionTypes.GET_TYPE:
      return getReasonType1(newState,action);   
    case actionTypes.GET_ID:
        return getSequenceid1(newState,action);     
    default:
          return newState;
    }
}