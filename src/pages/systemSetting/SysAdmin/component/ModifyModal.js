import React from 'react';
import {Table,Col, Modal, Input, Form, Radio, DatePicker,Select} from "antd";
import RadioGroup from 'antd/lib/radio/group';

const { Option } = Select;

const ModifyModal=(props)=>{
      
        const modifyokk=()=>{
          console.log(props)
          props.form.validateFields((err, values) => {
            if(!err){
              // console.log(values)
              props.modifyok(values)
            }
          });
        }
    
        const { getFieldDecorator ,validateFields} = props.form;

        const formItemLayout = {
            labelCol: {span: '5'},
            wrapperCol: {span: '15'}
          }
    return(
        <Modal
        title="修改"
        visible={props.modifyModal}
        onOk={modifyokk}
        onCancel={props.modifycancel}
        centered={true}
        bodyStyle={{marginLeft:40}}
        >
           <Form className='formStyle' >
           
           <Form.Item>
                    <span>管理员工号:&emsp;&emsp;</span>
                    <span>{props.empno}</span>
             </Form.Item>
             <Form.Item>
                    <span>管理员姓名:&emsp;&emsp;</span>
                    <span>{props.chname}</span>
             </Form.Item>
             <Form.Item>
               <span>是否启用:&emsp;&emsp;</span>
               {
                 getFieldDecorator('valid',{
                   rules:[{required:true,message:'必填'}],
                 })
                 (
                   <Radio.Group>
                     <Radio value='Y'>Y</Radio>
                      <Radio value='N'>N</Radio>
                   </Radio.Group>
                 )
               }
             </Form.Item>


             {/* {
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
                       })
                       (renderItem(v))
                     }
                  
                   </Form.Item>
                 )
               })
             } */}
          </Form>
        </Modal>
    )
}

export default Form.create()(ModifyModal)