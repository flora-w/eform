import React, {Component, Fragment , useState, useEffect } from 'react';
import { Card, Table, Button, Col, Form, Input, Row } from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from './store';


class AgentQuery extends Component {


  render(){

  const buttonLayout = {
    wrapperCol: { span: 14, offset: 10 },
  }
    const _columns = [
      {title: '被代理人部門', dataIndex: 'deptcode', align: 'center'},
      {title: '被代理人工號', dataIndex: 'empno', align: 'center'},
      {title: '被代理人姓名', dataIndex: 'chname', align: 'center'},
      {title: '被代理英文名', dataIndex: 'enname', align: 'center'},
      {title: '代理人工號', dataIndex: 'agentEmpno', align: 'center'},
      {title: '代理人姓名', dataIndex: 'agentChName', align: 'center'},
      {title: '代理人英文名', dataIndex: 'agentEnName', align: 'center'},
      {title: '代理開始時間', dataIndex: 'startDate', align: 'center'},
      {title: '代理結束時間', dataIndex: 'endDate', align: 'center'},
    ];


    const {onInput,publishSearch,data}=this.props;
    return(
    <>
      <Card
          title='查詢代理設定'
          headStyle={{color: '#666'}}
          bordered={false}
          // loading={loading}
          style={{margin: 5}}
        >
          <Form>
              <div style={{margin:10}}>
                 <span>被代理人工號
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                  onChange={(e)=>onInput('empno',e.target.value)}
                 />
                 </span>
                  <span>&emsp;&emsp;&emsp;</span>
                  <span>被代理人姓名
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                  onChange={(e)=>onInput('chname',e.target.value)}
                 />
                 </span>
                  <span>&emsp;&emsp;&emsp;</span>
                  <span>被代理人英文名
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                   onChange={(e)=>onInput('enname',e.target.value)}
                 />
                 </span>
              </div>
              <div style={{margin:10}}>
              <span>代理人工號
                <span>&emsp;</span>
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                 onChange={(e)=>onInput('agentEmpno',e.target.value)}
                 />
                 </span>
                  <span>&emsp;&emsp;&emsp;</span>
                  <span>代理人姓名
                  <span>&emsp;</span>
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                  onChange={(e)=>onInput('agentChName',e.target.value)}
                 />
                 </span>
                  <span>&emsp;&emsp;&emsp;</span>
                  <span>代理人英文名
                  <span>&emsp;</span>
                 <Input style={{width:'200px',marginLeft:'36px'}}  
                  onChange={(e)=>onInput('agentEnName',e.target.value)}
                 />
                 </span>
              </div>
              <Form.Item {...buttonLayout}>
                 <Button htmlType='submit' type='primary'
                 onClick={()=>{publishSearch()}}
                 >查詢</Button>
               </Form.Item>
          </Form>




      </Card>
      <Card
          title='代理設定設定'
          bordered={false}
          // loading={loading}
          headStyle={{color: '#666'}}
          style={{margin: 5}}
        >
        <Table 
            columns={_columns}
            pagination={{hideOnSinglePage: true}}
            size='small'
            bordered={true}
            dataSource={data}
          />
      </Card>
    </>
    )
  }
}





const mapStateToProps=(state)=>{

  const {data}=state.agentQueryReducer.agentSetQueryReducer;
  return {data};
}
const mapDispatchToProps=(dispatch)=>{
  return{

    onInput(id,value){
      dispatch(actionCreators.onInput(id,value))
    },
    publishSearch(){
      dispatch(actionCreators.publishSearch())
    }
  }
}


export default Form.create()(connect(mapStateToProps,mapDispatchToProps)(AgentQuery));