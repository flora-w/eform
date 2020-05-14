import React,{component, Component} from 'react';
import {Form, Input, Button, DatePicker,message} from 'antd';
import { Link } from 'react-router-dom';

class EachPerson extends Component {

    render(){

        
    const renderItem=(v)=>{

        switch(v['type'].toUpperCase()){
            case'INPUT':
              return <Input type='small' style={{width:180}}/>;
            case 'DATEPICKER':
                return <DatePicker />;
            default:
                break;
        }
    }

    const submit=()=>{

        form.validateFields((err,values)=>{
            // if(values.site!==undefined&&values.proid!==undefined&&values.newid!==undefined&&values.startdate!==undefined)
            if(values.site!==undefined)
            {
                // console.log(this)
             this.props.submit(values)   
            }else{
                message.info('请填写完整信息');
            }
        })
    }

     
    const {form,form:{getFieldDecorator},columns } = this.props;
        return(
            
        <Form>
            {
                columns.map((v,k)=>{
                    return(
                        
                       <span style={{marginLeft:20}} >{v.title}&emsp;
                           {
                               getFieldDecorator(v.dataIndex,{
                                // rules: [{ required: true, message: '必填' }],
                               })
                               (renderItem(v))
                           }
                       </span>
                    )
                })
            }
            <Link to='/system-setting/EmployeeTransfer'>
            <Button 
            style={{marginLeft:20}}
            onClick={submit}
            >确定</Button>
            </Link>
        </Form>
        )
    }

   
}

export default Form.create()(EachPerson);