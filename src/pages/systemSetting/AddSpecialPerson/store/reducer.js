import * as actionTypes from './actionTypes'; 


const defaultState ={
  type:'',
  publicId:'',
  upLoad:[],
  showBtn:false,
  budget_allowance_data:[],
};

const selecttype1 =(newState,action)=>{
   newState.type=action.value;
   return newState;
}
const isPublic1 =(newState,action)=>{
  newState.publicId=action.value;
  return newState;
}
const showBtn = (newState,action)=>{
  newState.showBtn =action.data;
  return newState;
}

const saveUpLoadFile = (newState,action)=>{
  newState.upLoad =action.data;
  newState.showBtn= true;
  return newState;
}
const getPageDataSceondb=(newState,action)=>{
   newState.budget_allowance_data=action.data;
   return newState;
}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
    case actionTypes.SELECT_TYPE:
      return selecttype1(newState,action);
    case actionTypes.IS_PUBLIC:
      return isPublic1(newState,action);    
    case actionTypes.SAVEUPLOAD_FILE:
      return saveUpLoadFile(newState,action); 
    case actionTypes.SHOW_BTN:
        return showBtn(newState,action); 
    case actionTypes.GET_PAGE_DATA_SECOND:
        return getPageDataSceondb(newState,action);
    default:
          return newState;
    }
}