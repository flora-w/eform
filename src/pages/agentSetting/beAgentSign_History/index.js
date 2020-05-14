import React,{ Component } from 'react';
import { Card, Table, Tag } from 'antd';
import store, { actionCreators } from './store';
import{connect} from 'react-redux';


class BeAgentSign_History extends Component{

componentDidMount(){
  this.props.getPageData();
  console.log(this.props)
}

  render(){
        const temp = [
            {title: '表單號', dataIndex: 'Serialid', align: 'center'},
            {title: '表單名稱', dataIndex: 'FormName', align: 'center'},
            {title: '部門', dataIndex: 'deptcode', align: 'center'},
            {title: '被代理人', dataIndex: 'Agent', align: 'center'},
            {title: '簽核時間', dataIndex: 'SignDate', align: 'center'},
            {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => (<span style={{color: '#fc0'}}>{record.condition}</span>)},
          ];

   const{
    data
   }=this.props;
    return (
      <Card
              title='被代理簽核記錄列表'
              bordered={false}
              loading={false}
              headStyle={{color: '#666'}}
              style={{margin: 5}}
            >
            <h2 style={{color: '#39f'}}>目前您有<Tag color='red'>{data.length}</Tag>筆代理他人簽核記錄</h2>
            <Table 
                columns={temp}
                pagination={{hideOnSinglePage: true, pageSize:20}}
                size='small'
                bordered={true}
                dataSource={data}
              />
          </Card>
    )

  }
}


const mapStateToProps = ( state ) => {
  const { 
    data}
   = state.beAgentSignReducer.beAgentSignHistoryReducer;
  return{
    data
  }
}


const mapDispatchToProps =(dispatch)=>{
  return{
    getPageData(){
      dispatch(actionCreators.getPageData());
    },
    
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(BeAgentSign_History);

