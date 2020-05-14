import * as actionTypes from './actionTypes'; 
import { onSelect, getData } from './actionCreators';


const defaultState ={
  data:'',

};
const onSelect1 =(newState,action)=>{
  console.log(newState)
  newState[action.id]=action.value;//把获取到的输入的值，赋给相应的栏位名称
  return newState;
}
const getData1 =(newState,action)=>{
  newState.data=action.value;
  return newState;
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
       case actionTypes.ON_SELECT:
         return onSelect1(newState,action)
       case actionTypes.GET_DATA:
        return getData1(newState,action)
           
    default:
          return newState;
    }
}