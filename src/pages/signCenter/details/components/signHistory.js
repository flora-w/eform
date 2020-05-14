import React from 'react';
import {Table} from 'antd';
import Card from '../../../../components/card';
// import {Card} from 'antd';
export default ({data})=>{
    const columns =[
        {title:'签核步骤',dataIndex:'sSignStepName'},
        {title:'签核人',dataIndex:'sSignerName'},
        {title:'签核时间',dataIndex:'sSignDateTime'},
        {title:'签核结果',dataIndex:'sResultName'},
        {title:'签核意见',dataIndex:'sComment'},
    ]
    return(
        <Card title='签核历程' className='sign-history'>
            <Table
            rowKey='sSignDateTime'
            columns={columns}
            dataSource={data}
            pagination={false}
            size="middle"
            bordered
            />

        </Card>
    )
}