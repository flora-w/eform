import React ,{Fragment,Component} from 'react';
import {Table,message,DatePicker,Radio,Form, Input, Button} from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';


class FillForm extends Component{


    render(){
        const columns = [
            {title: '序號', dataIndex: 'uniqueid', align: 'center'},
            {title: 'site', dataIndex: 'site', align: 'center'},
            {title: '系統/function', dataIndex: 'function', align: 'center'},
            {title: 'pic', dataIndex: 'pic', align: 'center'},
            {title: 'ext', dataIndex: 'ext', align: 'center'},
          ];
        
        return(

          // <div>12222222222222222222222</div>
            <Table 
            columns={columns}
            pagination={{hideOnSinglePage: true}}
            size='small'
            bordered={true}
            // dataSource={data}
          />
        )
    }
}

export default Form.create()(FillForm);


