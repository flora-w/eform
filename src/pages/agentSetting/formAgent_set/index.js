import React,{ PureComponent } from 'react';
import {message, Card, Form, Button, Select, TimePicker, DatePicker, Tag ,Popconfirm} from 'antd';
import AgentTable from '../components/agentTable';
import {connect } from 'react-redux';
import {actionCreators} from './store';
// import * as style from './index.scss';

const {Option} = Select;
class FormAgentSet extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({loading: false}))
    },1000);
    this.props.getFormData();
    this.props.getFormName();
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
    
  render() {
      const{deleteFormData}=this.props
     const columns= [
        {title: '表單名稱', dataIndex: 'formname', align: 'center'},
        {title: '開始時間', dataIndex: 'startDate', align: 'center'},
        {title: '結束時間', dataIndex: 'endDate', align: 'center'},
        {title: '代理人', dataIndex: 'agent', align: 'center'},
        {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => <Tag color='blue'>{record.condition}</Tag>},
        {title: 'Cancel' ,dataIndex: 'cancel', align: 'center',
         render: (text,record,index) => 
         <Popconfirm
         title='你确认要删除吗？'
         onConfirm={()=>deleteFormData(record,index)}
         okText='是'
         onCancel='否'
         >
           <a href='javascript'>删除</a>
         </Popconfirm>
         }
      ];


    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const {form,form:{getFieldDecorator,validateFields}, data,name,allform,alldepts,agent,formSubmit} = this.props;
    return (
        <>
           <AgentTable 
              title='表單代理狀況'
              // loading={loading}
              columns={columns}
              data={data}
            />
          <Card 
              title='表單代理設定'
              bordered={false}
              style={{margin: 5}}
              headStyle={{color: '#666'}}
            > 
              <Form layout='horizontal' {...formItemLayout}>
                  <Form.Item
                      label='被代理人:'
                    >
                      <span>{name}</span>
                  </Form.Item>
                  <Form.Item
                      label='表單名稱:'
                    >
                    {getFieldDecorator('formname',{rules: [{ required: false, message: '必填' }],})(
                    <Select
                        placeholder='select form name'
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
                         allform.map(v=>(
                          <Option value={v} >{v}</Option>
                      ))
                    }
                      </Select>
                  )}
                  </Form.Item>
                  <Form.Item
                      label='代理人所屬部門:'
                    >
                      {getFieldDecorator('agentdept')(
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
                  </Form.Item>
                  <Form.Item
                      label='代理人:'
                    >
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
                  </Form.Item>
                  <Form.Item
                      label='代理開始日:'
                    >
                     {getFieldDecorator('startday')
                     (
                       <DatePicker />
                      )}
                  </Form.Item>
                  <Form.Item
                      label='時間:'
                      
                    >
                     {getFieldDecorator('starttime')
                     (
                       <TimePicker format='HH:mm' minuteStep={30} />
                     )}
                  </Form.Item>
                  <Form.Item
                      label='代理結束日:'
                    >
                        {getFieldDecorator('endday')
                       (
                         <DatePicker />
                       )}
                  </Form.Item>
                  <Form.Item
                      label='時間:'
                    >
                       {getFieldDecorator('endtime')
                        (
                          <TimePicker format='HH:mm' minuteStep={30} />
                        )}
                  </Form.Item>
                  <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit" style={{margin: 'atuo'}}
                    onClick={() =>this.props.formSubmit(form)}
                    >
                      設定代理人
                    </Button>
                  </Form.Item>
              </Form>
          </Card>
        </>
    )
  }
}
const mapStateToProps=(state)=>{
     const {data,name,allform,alldepts,agent   }
     =state.formAgentReducer.formAgentSetReducer;
     return{data,name,allform,alldepts,agent   };
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getFormData(){
      dispatch(actionCreators.getFormData())
      console.log(this)
    },
    deleteFormData(record,index){
      dispatch(actionCreators.deleteFormData(record,index))
    },
    getFormName(){
      dispatch(actionCreators.getFormName())
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


export default Form.create()(connect(mapStateToProps,mapDispatchToProps)(FormAgentSet));