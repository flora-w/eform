import * as actionTypes from './actionTypes'; 


const defaultState ={
    tableData:[],
    showModal: false,  //点击取消时 
    showModal2:false,//点击ok时
    modifyModalState:false,
    modifyModalState2:false,
    name:'',
    id:'',
    chname:'',
};

const showModal = (newState, action) => {
    newState.showModal = true;
    return newState;
  }
const hideModal=(newState,action)=>{
    newState.showModal=false;
    newState.showModal2=false;
    return newState;
}
const modifyCancel=(newState,action)=>{
  newState.modifyModalState=false;
  newState.modifyModalState2=false;
  return newState;
}
const modifyModal1 = (newState, action) => {
  newState.modifyModalState = true;
  newState.id=action.record.EmpNo;
  newState.chname=action.record.ChName;
console.log(action);
  return newState;
}
  const getName = (newState, action) => {
    newState.name = action.name;
    return newState;
}
const addData = (newState, action) => {
    return {...newState, tableData: action.data, showModal2: false}
  }
  const getPageDatatab=(newState,action)=>{
    newState.tableData = action.data;
    return  newState
      

}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch(action.type){
    case actionTypes.SHOW_MODAL:
            return showModal(newState, action); 
    case actionTypes.HIDE_MODAL:
            return hideModal(newState, action);
    case actionTypes.MODIFY_MODAL:
            return modifyModal1(newState,action);
    case actionTypes.MODIFY_CANCEL:
            return modifyCancel(newState, action);
    case actionTypes.GET_NAME:
            return getName(newState, action);
    case actionTypes.ADD_DATA:
            return addData(newState, action);
    case actionTypes.PAGE_DATA:
                // console.log('212122222222222')
         return getPageDatatab(newState,action);
           
    default:
          return newState;
    }
}