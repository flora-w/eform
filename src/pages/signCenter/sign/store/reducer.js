import * as actionTypes from './actionTypes';
import * as other from '../../details/store/actionTypes';
import { currPage } from './actionCreators';
// import { getPageData } from './actionCreators';

const defaultState={
    page:'',
    dataSource:[],
    signHistory:[],
    formData:[]

};
//获取sign0/sign1....是哪一个待签核页面
const currPaged=(newState,action)=>{
    newState.page=action.id;
    return newState
}
//获取待签核，签核通过等等等等表单列表内容
const pageData=(newState,action)=>{

    if(newState.page==0 &&action.data.data.sign0.length>0){
        newState.dataSource=action.data.data.sign0.map((v,k)=>({...v,key:k}));
    }else if(newState.page==1 && action.data.data.sign1.length>0){
        newState.dataSource=action.data.data.sign1.map((v,k)=>({...v,key:k}))
    }

    return  newState;
}

//点击表单号之后的
const formClick =(newState,action)=>{

    newState.formData={...action.data.data.FormDetail,...action.data.data.FlowDetail};
    newState.signHistory=action.data.data.signHistory;
    console.log(newState.signHistory);
    return newState;
}

export default(state=defaultState,action) =>{
    const newState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionTypes.SIGN_PAGE_DATA:  
            return pageData(newState,action);
        case actionTypes.CURR_PAGE:
            return currPaged(newState,action);
        //点击单号显示的内容
        case  other.FORMID_CLICK:
            return  formClick(newState,action);
        default:
            return newState;
    }

}