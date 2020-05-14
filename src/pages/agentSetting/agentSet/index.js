import React,{Component, useState, useEffect } from 'react';
import { message ,Card, Select, Row, Col, DatePicker, TimePicker, Button, Form,Popconfirm } from 'antd';
import AgentPublicTable from '../components/agentTable';
import * as style from './index.scss';
import {connect }from 'react-redux';
import {actionCreators} from './store';


const { Option } = Select;

class AgentSet extends Component {

  componentDidMount(){
    // console.log(this.props);
    this.props.getFinanceData();
    this.props.getAgentData();
    this.props.getDept();
    this.props.getAllDept();
  }

 onChange(value) {
  // console.log(value);
}

 onBlur() {
  // console.log('blur');
}

 onFocus() {
  // console.log('focus');
}

 onSearch(val) {
  // console.log('search:', val);
}

 
render(){

  const RowStyle={marginBottom: 10};
  const LabelStyle={lineHeight: 2.5};

  const {deleteFamilyInfo}=this.props;
  const one = [
    {title: '被代理人部門', dataIndex: 'deptcode', align: 'center'},
    {title: '被代理人', dataIndex: 'name', align: 'center'},
    {title: '開始時間', dataIndex: 'startDate', align: 'center'},
    {title: '結束時間', dataIndex: 'endDate', align: 'center'},
  ];
  
  const anthor_columns = [
    {title: '部門', dataIndex: 'deptcode', align: 'center'},
    {title: '代理人部门', dataIndex: 'BeAgentedDeptcode', align: 'center'},
    {title: '代理人', dataIndex: 'BeAgented', align: 'center'},
    {title: '開始時間', dataIndex: 'startDate', align: 'center'},
    {title: '結束時間', dataIndex: 'endDate', align: 'center'},
    {title: 'Cancel', dataIndex: 'Cancel', align: 'center',
     render: (text,record,index) => (
      // <span style={{cursor: 'pointer'}} onClick={() => handleClick(text,record,index)}>Cancel</span> 
       <span>
         <Popconfirm
         title='确定要删除吗？'
         onConfirm={()=>deleteFamilyInfo(record,index)}
         onCancel={null}
         okText='是'
         onCancel='否'>
           <a href='javascript'>删除</a>
         </Popconfirm>
       </span>
      ) 
    }]

const {form,form:{getFieldDecorator,validateFields},financeAgent ,personalAgent,dept,alldepts,agent,formSubmit} =this.props;
// console.log(financeAgent)
  return (
    <div className={style.container}>
        <AgentPublicTable 
          title='職務代理設定狀況'
          // loading={loading}
          columns={one}
          data={financeAgent}
        />
        <AgentPublicTable 
          title='目前個人代理設定'
          // loading={loading}
          columns={anthor_columns}
          data={personalAgent}
        />
        <Card
            bordered={false}
            title='職務代理設定 '
            headStyle={{color: '#666'}}
            style={{margin: 5}} 
            // loading={loading}
          >
           <Form>
              <Row gutter={16} style={RowStyle}>
                <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>部門:</label>                 
                </Col>
                <Col span={4}>
                  {getFieldDecorator('dept')(
                    <Select
                        showSearch
                        optionFilterProp="children"
                        // defaultValue= 'ALL'
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="all">代理所有部门财务</Option>
                        <Option value={dept}>{this.props.dept}</Option>
                       {
                         dept.map(v=>(
                          <Option value={v} >{v}</Option>
                      ))
                    }
                      </Select>
                  )}
                </Col>
              </Row>
              <Row gutter={16} style={RowStyle}>

              <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>代理人部門:</label>                 
                </Col>
                <Col span={4}>
                  {getFieldDecorator('agentdept',{rules:[{required:true,message:'deptcode not null'}]})(
                    <Select
                        placeholder='select agent dept'
                        showSearch
                        optionFilterProp="children"
                        // defaultValue= 'ALL'
                        onChange={this.props.getDeptAgent.bind(this)}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                       {
                         alldepts.map(v=>(
                          <Option value={v} >{v}</Option>
                      ))
                    }
                      </Select>
                  )}
                </Col>
                <Col span={2} style={{textAlign: 'right'}}>
                    <label htmlFor="" style={LabelStyle}>代理人:</label>                 
                  </Col>
                  <Col span={3}>
                  {getFieldDecorator('agent')(
                    <Select
                        placeholder='select agent'
                        showSearch
                        optionFilterProp="children"
                        // defaultValue= 'ALL'
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                       {
                         agent.map(v=>(
                          <Option value={v} >{v}</Option>
                      ))
                    }
                      </Select>
                  )}
                </Col>
                {/* <Col><span style={{color:'red'}}>*</span></Col> */}
              </Row>
              <Row gutter={16} style={RowStyle}>
                <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>代理開始日:</label>
                </Col>
                <Col span={12}>
                  {getFieldDecorator('startday')
                  (
                    <DatePicker />
                  )}
                </Col>
              </Row>
              <Row gutter={16} style={RowStyle}>
                <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>開始時間:</label>
                </Col>
                <Col span={12}>
                 {getFieldDecorator('starttime')
                  (
                    <TimePicker format='HH:mm' minuteStep={30} />
                  )}
                </Col>
              </Row>
              <Row gutter={16} style={RowStyle}>
                <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>代理結束日:</label>
                </Col>
                <Col span={12}>
                {getFieldDecorator('endday')
                  (
                    <DatePicker />
                  )}
                </Col>
              </Row>
              <Row gutter={16} style={RowStyle}>
                <Col span={3}>
                  <label htmlFor="" style={LabelStyle}>結束時間:</label>
                </Col>
                <Col span={12}>
                {getFieldDecorator('endtime')
                  (
                    <TimePicker format='HH:mm' minuteStep={30} />
                  )}
                </Col>
              </Row>
           </Form>
            <Row gutter={16} style={{textAlign: 'center'}}>
                <Button 
                  type="primary"
                  loading={false} 
                  disabled={false}
                  style={{margin: 'atuo'}}
                  htmlType='button'
                  onClick={()=>this.props.formSubmit(form)}
                >
                  設定代理人
                </Button>
            </Row>
        </Card>  
    </div>
  )
}
}

const mapStateToProps =(state)=>{
   const {
     financeAgent,personalAgent,dept,alldepts,agent
    }=state.financeSetReducer.financeAgentSetReducer;
   return{
     financeAgent,personalAgent,dept,alldepts,agent
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getFinanceData(){
      // console.log(this)
     dispatch(actionCreators.getFinanceData())
    },
    getAgentData(){
      dispatch(actionCreators.getAgentData())
    },
    deleteFamilyInfo(record,index){
      // console.log(record);//api里面获取到的数据，即需要删除的这一整条数据信息
      // console.log(index);
      dispatch(actionCreators.deleteFamilyInfo(record,index))
    },
    getDept(){
      dispatch(actionCreators.getDept())
    },
    getAllDept(){
      dispatch(actionCreators.getAllDept())
    },
    getDeptAgent(value){
      dispatch(actionCreators.getDeptAgent(value))
  
    },
    formSubmit(form){
      const that=this;
      form.validateFields((err,value)=>{
        // if(value.dept!==undefined&&value.agentdept!==undefined&&value.agent!==undefined&&value.startday!==undefined&&value.starttime!==undefined&&value.endday!==undefined&&value.endtime!==undefined){
          if(value!==undefined){
          dispatch(actionCreators.submit(value,that))
        }else{
          message.info('请填写完整信息');

        }
      })
    }

}
}

export default Form.create()(connect(mapStateToProps,mapDispatchToProps)(AgentSet));