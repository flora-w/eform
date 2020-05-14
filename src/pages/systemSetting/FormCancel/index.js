import React, { Fragment , useState, useEffect } from 'react';
import { Card, Table, Button, Col, Form, Input, Row ,Tag} from 'antd';


const AgentQuery = props => {
  const buttonLayout = {
    wrapperCol: { span: 14, offset: 10 },
  }
  const { form: { getFieldDecorator }} = props;
  const [formItem, setFormItem] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const temp = [
      [
        {id: 'empno', label: '单号:', col: 3, inputCol: 4},
        // {id: 'chname', label: '被代理人姓名:', col: 3, inputCol: 4},
        // {id: 'enname', label: '被代理人英文名:', col: 3, inputCol: 4}
      ],
    //   [
    //     {id: 'agentEmpno', label: '代理人工號:', col: 3, inputCol: 4},
    //     {id: 'agentChName', label: '代理人姓名:', col: 3, inputCol: 4},
    //     {id: 'agentEnName', label: '代理人英文名:', col: 3, inputCol: 4}
    //   ]
    ];
    const _columns = [
        {title: '表單名稱', dataIndex: 'formname', align: 'center'},
        {title: '開始時間', dataIndex: 'startDate', align: 'center'},
        {title: '結束時間', dataIndex: 'endDate', align: 'center'},
        {title: '代理人', dataIndex: 'agent', align: 'center'},
        {title: '狀態', dataIndex: 'condition', align: 'center', render: (text,record) => <Tag color='blue'>{record.condition}</Tag>},
        {title: 'Cancel' ,dataIndex: 'cancel', align: 'center', render: (text,record) => <Tag color='#f50'>Cancel</Tag>}
      ];
    setFormItem(() => temp);
    setColumns(() => _columns);
    setTimeout(() => setLoading(() => false),1000);
  }, []);
  const data = [
        {formname: '1312', startDate: '2019/07/07', endDate: '2020/07/09', agent: 'XXXX', condition: '進行中', key:0},
        {formname: '1312', startDate: '2019/07/07', endDate: '2020/07/09', agent: 'XXXX', condition: '進行中', key:1},
        {formname: '1312', startDate: '2019/07/07', endDate: '2020/07/09', agent: 'XXXX', condition: '進行中', key:2},
        {formname: '1312', startDate: '2019/07/07', endDate: '2020/07/09', agent: 'XXXX', condition: '進行中', key:3},
        {formname: '1312', startDate: '2019/07/07', endDate: '2020/07/09', agent: 'XXXX', condition: '進行中', key:4},
       ];
  return (
    <>
      <Card
          title='表单取消'
          headStyle={{color: '#666'}}
          bordered={false}
          loading={loading}
          style={{margin: 5}}
        >
          <Form>
              {
                formItem.map( (v,k) => (
                  <Row key={k} gutter={16} style={{marginBottom: 10}}>
                      {
                        v.map((value, index) => (
                          <Fragment key={index}>
                            <Col span={3}><label htmlFor="" style={{lineHeight: 2.5}}>{value.label}</label></Col>
                            <Col span={4} style={{marginRight: 10}}>
                              {
                                getFieldDecorator(value.id,)(
                                  <Input type='text' autoComplete='off' allowClear={true}/>
                                )
                              }
                            </Col>
                          </Fragment>
                        ))
                      }
                  </Row>
                ))
              }
              <Form.Item {...buttonLayout}>
                <Button htmlType='submit' type='primary'>查詢</Button>
              </Form.Item>
          </Form>
      </Card>
      <Card
          title='查询结果'
          bordered={false}
          loading={loading}
          headStyle={{color: '#666'}}
          style={{margin: 5}}
        >
        <Table 
            columns={columns}
            pagination={{hideOnSinglePage: true}}
            size='small'
            bordered={true}
            dataSource={data}
          />
      </Card>
    </>
  )
}

export default Form.create()(AgentQuery);