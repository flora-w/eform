import React,{ Component } from 'react';
import { Card, Table } from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from './store';



class AgentSetHistory extends Component {
componentDidMount(){
  this.props.getData()
}

  render(){

        const columns = [
      {title: '序號', dataIndex: 'uniqueid', align: 'center'},
      {title: 'site', dataIndex: 'site', align: 'center'},
      {title: '系統/function', dataIndex: 'function', align: 'center'},
      {title: 'pic', dataIndex: 'pic', align: 'center'},
      {title: 'ext', dataIndex: 'ext', align: 'center'},
    ];

    const {data}=this.props;

    return(
          <Card
        title='help desk'
        bordered={false}
        loading={false}
        headStyle={{color: '#666'}}
        style={{margin: 5}}
      >
      {/* <h2 style={{color: '#39f'}}>目前您有<Tag color='red'>2</Tag>筆代理人設定記錄</h2> */}
      <Table 
          columns={columns}
          pagination={{hideOnSinglePage: true}}
          size='small'
          bordered={true}
          dataSource={data}
        />
    </Card>
    )
  }
}





const mapStateToProps=(state)=>{
  const {data}=state.SysHelpReducer.SysHelpDeskReducer;
  return {data}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getData(){
      dispatch(actionCreators.getData())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AgentSetHistory);

