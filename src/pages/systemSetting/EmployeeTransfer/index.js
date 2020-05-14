import React,{Component, Fragment} from 'react';
import {Link, Card, Form, Radio,Button, Select, TimePicker, DatePicker, Tag,Input,Col, Row, Table } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import RadioButton from 'antd/lib/radio/radioButton';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import EachPerson from './component/EachPerson';
import BatchPerson from './component/BatchPerson';

 class EmployeeTransition extends Component{

  
       
     render(){

      const columns =[
        {title:'转入site',dataIndex:'site1',align:'center',type:'input'},
        {title:'原工号',dataIndex:'proid',align:'center',type:'input'},
        {title:'新工号',dataIndex:'newid',align:'center',type:'input'},
        {title:'生效日',dataIndex:'startdate',align:'center',type:'datepicker'},                
]

      const {changeMode,submitFirst}=this.props;
      const {type,data}=this.props;
         return(
           <Fragment>
            <Card 
            title='转调'
            bordered={false}
            // style={{margin: 5}}
            headStyle={{color: '#666'}}  > </Card>
            
            <span style={{marginLeft:20}}>选择新增方式 &emsp;</span>
            <RadioGroup 
            onChange={changeMode}
            >
              <Radio value='1'>逐笔填写</Radio>
              <Radio value='2'>批量上传</Radio>
            </RadioGroup>
           <div>&emsp;&emsp;</div>
            {
              type==1 &&
              <EachPerson
              submit={submitFirst}
              columns={columns}
              />
            }
        
            {
              type==2 &&
              <BatchPerson 
              />
            }
          
            <div 
            
            bordered={false}
            style={{marginLeft: 20,fontSize:17}}
            >添加记录
            <Table
            columns={columns}
             data={data}
            />
                   </div>
     </Fragment>
         )   
     }
 }


const mapStateToProps=(state)=>{

  const {type,data}=state.EmployeeTransReducer.EmployeeTransferReducer;
  return {type,data}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeMode(e){
      dispatch(actionCreators.changeMode(e.target.value));
    },
    submitFirst(value){
    
      // console.log(this)
      // dispatch(actionCreators.submitFirst(value))
    }
  }
}
 export default  connect(mapStateToProps,mapDispatchToProps)(EmployeeTransition);