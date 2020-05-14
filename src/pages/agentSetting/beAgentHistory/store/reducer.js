

import * as actionTypes from './actionTypes'; 

const defaultState ={
    financeData:[],
};

const getPageDatatab=(newState,action)=>{
    newState.financeData = action.data;
    return  newState
      

}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.FINANCE_SIGN_DATA:
           return getPageDatatab(newState,action);
    default:
          return newState;
    }
}