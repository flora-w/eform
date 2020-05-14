

import * as actionTypes from './actionTypes'; 
import { getData } from './actionCreators';


const defaultState ={
  data:[],
  ranklist:[],
  tabletype:'',
  
};
const getDatad =(newState,action)=>{
  newState.data=action.data;
  newState.tabletype=1;
  return newState;
}
const getRank =(newState,action)=>{
  newState.ranklist=action.data;
  newState.tabletype=2;
  return newState;
}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
    case actionTypes.GET_DATA:
      return getDatad(newState,action);
    case actionTypes.GET_RANK:
      return getRank(newState,action)
    default:
          return newState;
    }
}