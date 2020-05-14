// import React, {useState, useEffect} from 'react';
// import { Card, Table, Tag } from 'antd';

// const AgentSignHistory = props => {
//   const [columns, setColumns] = useState([]);
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const temp = [
//       {title: '表單號', dataIndex: 'Serialid', align: 'center'},
//       {title: '表單名稱', dataIndex: 'FormName', align: 'center'},
//       {title: '部門', dataIndex: 'deptcode', align: 'center'},
//       {title: '代理人', dataIndex: 'Agent', align: 'center'},
//       {title: '簽核時間', dataIndex: 'SignDate', align: 'center'},
//       {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => (<span style={{color: '#fc0'}}>{record.condition}</span>)},
//     ];
//     const _data = [
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/16 08:00', condition: '同意', key: 0},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/15 08:00', condition: '同意', key: 1},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/14 08:00', condition: '同意', key: 2},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/13 08:00', condition: '同意', key: 3},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/12 08:00', condition: '同意', key: 4},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/11 08:00', condition: '進行中:目前步驟XXXXXXXXXX', key: 5},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/10 08:00', condition: '同意', key: 6},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/9 08:00', condition: '同意', key: 7},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/8 08:00', condition: '同意', key: 8},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/7 08:00', condition: '同意', key: 9},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/6 08:00', condition: '同意', key: 10},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/5 08:00', condition: '同意', key: 11},
//       {Serialid: 'P22F002190819637410', FormName: '物品廠區轉運', deptcode: 'MEL000', Agent: 'XXXXX', SignDate: '2019/08/4 08:00', condition: '同意', key: 12},
//     ];
//     setColumns(() => temp);
//     setData(() => _data);
//   }, [data])
//   return (
//     <Card
//         title='被代理簽核記錄列表'
//         bordered={false}
//         loading={false}
//         headStyle={{color: '#666'}}
//         style={{margin: 5}}
//       >
//       <h2 style={{color: '#39f'}}>目前您有<Tag color='red'>{data.length}</Tag>筆被代理簽核記錄</h2>
//       <Table 
//           columns={columns}
//           pagination={{hideOnSinglePage: true, pageSize:20}}
//           size='small'
//           bordered={true}
//           dataSource={data}
//         />
//     </Card>
//   )
// };



import React,{ Component } from 'react';
import { Card, Table, Tag } from 'antd';
import store, { actionCreators } from './store';
import{connect} from 'react-redux';


class AgentSignHistory extends Component{

componentDidMount(){
  this.props.getPageData();
}

  render(){
    const columns = [
            {title: '表單號', dataIndex: 'Serialid', align: 'center'},
            {title: '表單名稱', dataIndex: 'FormName', align: 'center'},
            {title: '部門', dataIndex: 'deptcode', align: 'center'},
            {title: '代理人', dataIndex: 'Agent', align: 'center'},
            {title: '簽核時間', dataIndex: 'SignDate', align: 'center'},
            {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => (<span style={{color: '#fc0'}}>{record.condition}</span>)},
          ];


   const{
    agentSign
   }=this.props;
    return (
    
      <Card
               title='被代理簽核記錄列表'
               bordered={false}
               loading={false}
               headStyle={{color: '#666'}}
               style={{margin: 5}}
             >
             <h2 style={{color: '#39f'}}>目前您有<Tag color='red'>{agentSign.length}</Tag>筆被代理簽核記錄</h2>
             <Table 
                 columns={columns}
                 pagination={{hideOnSinglePage: true, pageSize:20}}
                 size='small'
                 bordered={true}
                 dataSource={agentSign}
               />
          </Card>


    )

  }
}

const mapStateToProps = ( state ) => {
  const { 
    agentSign}
   = state.agentsignReducer.agentsignHistoryReducer;
  return{
    agentSign
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
export default connect(mapStateToProps,mapDispatchToProps)(AgentSignHistory);




