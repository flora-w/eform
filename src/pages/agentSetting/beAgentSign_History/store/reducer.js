import * as actionTypes from './actionTypes'; 

const defaultState ={
    data:[],
};


const getPageDatatab=(newState,action)=>{
    newState.data = action.data;
    return  newState
      

}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    // console.log(action);

    switch(action.type){
        case actionTypes.GET_DATA:
           return getPageDatatab(newState,action);
    default:
          return newState;
    }
}