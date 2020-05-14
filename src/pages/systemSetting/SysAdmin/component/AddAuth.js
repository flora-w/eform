import React from 'react';
import { Modal, Input, Form, Radio, DatePicker,Select} from "antd";
import RadioGroup from 'antd/lib/radio/group';

const { Option } = Select;
const AddAuth=(props)=>{

const renderItem =(v)=>{
  switch (v['type'].toUpperCase()){
    case 'INPUT':
      return <Input type='small' {...v.props}
      autoComplete='off'/>
    case 'RADIO':
      return(
        <RadioGroup>
          <Radio value='Y'>Y</Radio>
          <Radio value='N'>N</Radio>
        </RadioGroup>
      )
      case 'SELECT':
        return(
          <Select>
            <Option value='F'>First</Option>
            <Option value='S'>Second</Option>
          </Select>
        )
      case 'DATEPICKER':
        return(
          <DatePicker type ='small'></DatePicker>
        )
      default:
        break;
  }
}


  const handleAddAuthOk=()=>{
    console.log(props)
    props.form.validateFields((err, values) => {
      if(!err){
        // console.log(values)
        props.addAuthOk(values)
      }
    });
  }
  const formItemLayout = {
    labelCol: {span: '5'},
    wrapperCol: {span: '15'}
  }
  const { getFieldDecorator } = props.form;
  let name = props.name;
    return(
          <Modal
          title="新增"
          visible={props.showModal}
          onOk={handleAddAuthOk}
          onCancel={props.hideModal}
          centered={true}
          bodyStyle={{marginLeft:40}}
        >
          <Form className='formStyle'>
             {
               props.pageData.map((v,k)=>{
                 return(
                   <Form.Item
                   label={v.title}
                   key={v.title}
                  //  labelCol={{span: 7, offset: 12}}
                {...formItemLayout}
                   >
                     {
                       getFieldDecorator(v.id,{
                         rules: [{ required: true, message: '必填' }],
                         initialValue:v.id ==='ChName'?name:''
                       })
                       (renderItem(v))
                     }
                  
                   </Form.Item>
                 )
               })
             }
          </Form>
        </Modal> 
    )

}

export  default Form.create()(AddAuth)
