import * as actionTypes from './actionTypes'; 

const defaultState ={
    agentSetHistory:[],
};
const agentSetHistory={
    deptcode:'',
    agent:'',
    startDate:'',
    endDate:'',
    condition:''
}

const getPageDatatab=(newState,action)=>{
    // console.log(action.data);
    // console.log("1");
    newState.agentSetHistory = action.data.map((v, k) => ({ ...v, key: k }));

    return  newState
      

}

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    // console.log(action);

    switch(action.type){
        case actionTypes.AGENT_PAGE_DATA:
            // console.log('212122222222222')
           return getPageDatatab(newState,action);
    default:
          return newState;
    }
}