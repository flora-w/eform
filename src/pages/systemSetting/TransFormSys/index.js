import React,{Fragment,Component} from 'react';
import { message,Form,Card, Table, Input, Button } from 'antd';
import {connect} from 'react-redux';
import {actionCreators, actionTypes} from './store';
import FormTrans from './component/FormTrans';
import {withRouter} from 'react-router-dom';
import { compose } from "redux";

class TransFormSys extends Component{


render(){

  const columns =[
    {title:'表單號',dataIndex:'sequenceid',align: 'center'},
    {title:'表單名稱',dataIndex:'formname',align: 'center'},
    {title:'申請人',dataIndex:'applyid',align: 'center'},
    {title:'申請時間',dataIndex:'applydatetime',align: 'center'},
    {title:'待簽核步驟',dataIndex:'tobesignstep',align: 'center'},
    {title:'待簽核人',dataIndex:'tobesignedid',align: 'center'},
  ]

  const {history,data,form,form:{getFieldDecorator,validateFields},submit,reasonsome,getReasonType,sequenceid,submitFormTrans}=this.props
    return(
      <Fragment>
        <Card
        title='表單查詢'
        style={{marginLeft:5}}
        bordered={false}
        headStyle={{color: '#666'}}
        >
       <span><span style={{color:'red'}}>*</span>
         <span>表單號:&emsp;</span>
         {
           getFieldDecorator('sequenceid',{
             rules:[{required:true,message:'請填寫表單號'}]
           })
           (<Input
             style={{width:200}}
            />)
         }
         <span>&emsp;&emsp;&emsp;</span>
         <span style={{color:'red'}}>*</span>
         <span>待簽核人:&emsp;</span>
         {
           getFieldDecorator('tobesignedid',{
             rules:[{required:true,message:'請填寫表單號'}]
           })
           (<Input
             style={{width:200}}
            />)
         }
         <span>&emsp;&emsp;&emsp;</span>
         <Button
          onClick={()=>submit(form)}
         >查詢</Button>
       </span>
      </Card>
      <Card
      title='表單簽核明細'
        style={{marginLeft:5}}
        bordered={false}
        headStyle={{color: '#666'}}
      >
        <Table
        columns={columns}
        data={data}
        />

      </Card>
      <Card
      title="表單轉簽"
      style={{marginLeft:5}}
      bordered={false}
      headStyle={{color: '#666'}}
      >
      <FormTrans
      reasonsome={reasonsome}
      getReasonType={getReasonType}
      sequenceid={sequenceid}
      submitFormTrans={(values)=>submitFormTrans(values,history)}
      />
      </Card>
      </Fragment>
    )
}
}

const mapStateToProps=(state)=>{

  const {data,reasonsome,sequenceid}=state.TransFormReducer.TransFormSysReducer;
  return{data,reasonsome,sequenceid}
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      submit(form){
        form.validateFields((err,values)=>{
          if(!err){
            dispatch(actionCreators.submiform(values))
          }else{
          message.warning('請填寫完整')            
          }
        })
      },
      getReasonType(data){
        // console.log(value)
        dispatch(actionCreators.getReasonType(data))
   },
   submitFormTrans(values,history){
    //  console.log(location)
    //  dispatch(actionCreators.submitFormTrans(values,history))
   }
    }
  }
  
  // export default Form.create()(connect(mapStateToProps,mapDispatchToProps)(withRouter(TransFormSys)));

  export default compose(
    withRouter,
    connect( mapStateToProps, mapDispatchToProps ),
    Form.create()
  )(TransFormSys)
  