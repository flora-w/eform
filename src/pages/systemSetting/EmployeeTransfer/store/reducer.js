import * as actionTypes from './actionTypes'; 


const defaultState ={
      type:'',
      data:[],

};
const changeMode1 =(newState,action)=>{
      newState.type=action.data;
      return newState;
}
const getData1 =(newState,action)=>{
      newState.data=action.data;
      return newState;
}
const submitab =(newState,action)=>{
      
}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
     switch(action.type){
      case actionTypes.CHANGE_MODE:
            return changeMode1(newState, action);
      case actionTypes.GET_DATA:
            return getData1(newState, action);

     }
          return newState;
    }
