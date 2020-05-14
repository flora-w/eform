import * as actionTypes from './actionTypes';
import { getData, getData1 } from './actionCreators';
const defaultState={
    data:[],
}
const getData2=(newState,action)=>{
    console.log(action.data)
    newState.data=action.data;
    return newState
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.GET_DATA:
            return getData2(newState,action);
        default:
            return newState;
    }
}