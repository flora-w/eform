
import React,{ Component } from 'react';
import { Card, Table, Tag } from 'antd';
import store, { actionCreators } from './store';
import{connect} from 'react-redux';


class BeAgentHistory extends Component{

componentDidMount(){
  this.props.getPageData();
  // console.log(this.props)
}

  render(){
     
        const temp = [
      {title: '代理人部門', dataIndex: 'deptcode', align: 'center'},
      {title: '代理人', dataIndex: 'agent', align: 'center'},
      {title: '開始時間', dataIndex: 'startDate', align: 'center'},
      {title: '結束時間', dataIndex: 'endDate', align: 'center'},
      {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => (<span style={{color: '#3690cf'}}>{record.condition}</span>)},
    ];


   const{
    financeData
   }=this.props;
    return (
      <Card
      title='代理他人财物記錄'
      bordered={false}
      // loading={false}
      headStyle={{color: '#666'}}
      style={{margin: 5}}
    >
    <h2 style={{color: '#39f'}}>目前您有<Tag color='red'>{financeData.length}</Tag>筆代理他人财物記錄</h2>
    
      <Table
      columns={temp}
      dataSource={financeData}
      bordered={true} 
      />
      </Card>
    )

  }
}

const mapStateToProps = ( state ) => {
  const { 
    financeData}
   = state.financeDataReducer.financeSignDataReducer;
  return{
    financeData
  }
  // return (state.agentsetHistoryReducer);
}


const mapDispatchToProps =(dispatch)=>{
  return{
    getPageData(){
      dispatch(actionCreators.getPageData());
      // console.log(actionCreators.getPageData());
    },
    
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(BeAgentHistory);






