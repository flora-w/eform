import React from 'react';
import { Card, Table } from 'antd';
import PropsType from 'prop-types';

const AgentPublicTable = props => {
  const { title, columns, data } = props;
  let { loading } = props;
  return (
    <Card 
        title={title}
        headStyle={{color: '#666'}}
        style={{margin: 5}} 
        loading={loading}
        bordered={false}
      >
      <Table
          columns={columns}
          size='small'
          bordered={true}
          dataSource={data}
          pagination={{hideOnSinglePage: true, pageSize: 5}}
        />
    </Card>
  )
}
// AgentPublicTable.defaultProps = {
//   title: 'Title',
//   loading: false,
//   data: [],
//   columns: [{title: '请输入表头数组', dataIndex: 'Warning', align: 'center'}]
// }

// AgentPublicTable.propTypes = {
//   title: PropsType.string.isRequired,
//   loading: PropsType.bool.isRequired,
//   data: PropsType.arrayOf(PropsType.object),
//   columns: PropsType.arrayOf(PropsType.object).isRequired
// }

export default AgentPublicTable;