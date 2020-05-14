import * as actionTypes from './actionTypes';
import { onInput } from './actionCreators';

const defaultState={
    empno:'',
    chname:'',
    enname:'',
    agentEmpno:'',
    agentChName:'',
    agentEnName:'',
    data:[],
}

const onInpute =(newState,action)=>{
    console.log(newState)
    newState[action.id]=action.value;//把获取到的输入的值，赋给相应的栏位名称
    return newState;
}
//把查询到的数据渲染到表格上
const searchData=(newState,action)=>{
   newState.data=action.data;
}

export default (state=defaultState,action)=>{

    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.INPUT_DATA:
            return onInpute(newState,action);
        case actionTypes.DATA_SEARCH:
            return searchData(newState,action);
        default:
            return newState;
    }
}