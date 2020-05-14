import React,{Component} from 'react';
import {withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import  { actionCreators } from './store';
import{Card} from 'antd';
import { getUrlParam } from "../../../utils";
import { stat } from 'fs-extra';
import SignHistory from './components/signHistory';
import FormInfo from './components/FormInfo';
import SignOption from './components/signOption';
import './index.less';

 class Details extends Component{

urlParam=this.props.location.search;

  showFormInfo=(category)=>{
    const {formData}=this.props;
    if(category == 1){
      return <FormInfo data={formData}></FormInfo>;
    }else {
      return <FormInfo data={formData}></FormInfo>;
    }
    console.log(formData);
  }

   componentDidMount(){
        const formId = getUrlParam(this.urlParam, 'formId');
        const formName = getUrlParam(this.urlParam, 'formName');
        this.props.formIdClick(formId, formName);

        // console.log(this.urlParam);
      }


     render(){
       const {signHistory,category,formData,signFormSubmit} =this.props;
         return(
            <Card  >
              <div className="sign">
              {this.showFormInfo(category)}
              {
                    <SignHistory data={signHistory} ></SignHistory>
              }
              {
                <SignOption
                signFormSubmit={signFormSubmit.bind(this)}
                formId={formData.SerialID}
                />
              }
              </div>
            </Card>
         )
     }

 }

 const mapStateToProps=(state)=>{
      const {signHistory,formData,category}=state.signReducer.signTableReducer;
      return {signHistory,formData,category}
 }

 const mapDispatchToProps = ( dispatch ) => {
  //  console.log(this)
    return{
      formIdClick(formId, formName){
        //   console.log(formName);
        console.log(this)
        dispatch(actionCreators.formIdClick(formId, formName))
      },
      signFormSubmit(form,formId){
        const that=this;//定义that并由函数传递到actionCreator，方便使用props.history进行页面跳转
        // console.log(that);
        form.validateFields((err,values)=>{//获取到填写的数据，存储到values中
          if(!err){
            console.log(values)
            dispatch(actionCreators.submitData(values,formId,that))
          }
        })
      },
      
     
    }
  }

 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));