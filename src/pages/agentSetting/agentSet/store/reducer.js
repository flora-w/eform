import * as actionTypes from './actionTypes';


const defaultState ={
    financeAgent:[],
    personalAgent:[],
    dept:[1,2],//当前id人所在的部门
    alldepts:[],//所有部门
    agent:['a','b'],
};
const financeAgent= {
    deptcode:'',
    name:'',
    startDate:'',
    endDate:''
};
const personalAgent={
    deptcode:'',
    BeAgentedDeptcode:'',
    BeAgented:'',
    startDate:'',
    endDate:''
}


//财务代理人设定状况
const getFinanceDatab =(newState,action)=>{
    // console.log(action.data )
    newState.financeAgent=action.data.map((v, k) => ({ ...v, key: k }));

    return newState;
}

//目前个人代理设定
const getAgentDatab =(newState,action)=>{
  newState.personalAgent=action.data;
     return newState;
}
//设定代理人--登陆的这个人的部门
const getDeptb =(newState,action)=>{
    newState.dept=action.data;
    return newState;
}
//获取所有部门
const getAllDeptb =(newState,action)=>{
    newState.alldepts=action.data;
       return newState;
  }
  //获取当前选择部门的代理人
  const getDeptAgentb =(newState,action)=>{
    newState.agent=action.data;
       return newState;
  }
  //新设定的财务代理人
  const submitb =(newState,action)=>{
    newState.financeAgent=action.data;
       return newState;
  }
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    // console.log(action.type);
    switch(action.type){
        case actionTypes.FINANCE_DATA:
           return getFinanceDatab(newState,action);
        case actionTypes.PERSONALAGENT_DATA:
           return getAgentDatab(newState,action);
        case actionTypes.GET_DEPT:
            return getDeptb(newState,action);
        case actionTypes.GET_ALL_DEPT:
            return getAllDeptb(newState,action);
        case actionTypes.GET_DEPT_AGENT:
            return getDeptAgentb(newState,action);
        case actionTypes.SUBMIT_DATA:
            return submitb(newState,action);
            
    default: 
      return newState;
    }
        
}