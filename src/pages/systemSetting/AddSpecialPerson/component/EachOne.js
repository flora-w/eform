import React ,{Fragment,Component} from 'react';
import {message,DatePicker,Radio,Form, Input, Button} from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';


class EachOne extends Component{


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
            form.validateFields((err,value)=>{
                if(!err){
                    console.log(this.props)
                    this.props.submit(value);
                    
                }
                else{
                    message.warn('请填写完整')
                }
            })
        }
        const columns=[
        
            {title:'员工工号:',dataIndex:'userid',type:'input'},
            {title:'员工中文名:',dataIndex:'userchname',type:'input'},
            {title:'员工英文名:',dataIndex:'userenname',type:'input'}
        ]

      const isPublic=(e)=>{
          this.props.isPublic(e.target.value)
        }

        const {form,form:{getFieldDecorator,validateFields},publicId } = this.props;
        return(
         <Fragment>
           <Form style={{margin:5}}>  员工所属site：&emsp;
           {
               getFieldDecorator('site',{
                rules: [{ required: true, message: '必填' }],
               })
               (
                   <RadioGroup >
                       <Radio value='WKS'>WKS</Radio>
                       <Radio value='WCD'>WCD</Radio>
                       <Radio value='WCQ'>WCQ</Radio>
                       <Radio value='WOK'>WOK</Radio>
                       <Radio value='WTZ'>WTZ</Radio>
                       <Radio value='WHQ'>WHQ</Radio>
                       <Radio value='WIH'>WIH</Radio>
                       <Radio value='WMX'>WMX</Radio>
                       <Radio value='WCZ'>WCZ</Radio>
                       <Radio value='WMCZ'>WMCZ</Radio>
                       <Radio value='WPH'>WPH</Radio>
                       <Radio value='WZS'>WZS</Radio>
                   </RadioGroup>
               )
           }
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form style={{margin:5}}> 是否是公共账号：&emsp;
           {
               getFieldDecorator('public',{
                rules: [{ required: true, message: '必填' }],
               })
               (
                   <RadioGroup
                   onChange={isPublic}
                   >
                       <Radio value='11'>是</Radio>
                       <Radio value='22'>否</Radio>
                   </RadioGroup>
               )
           }
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form>
                {
                    columns.map((v,k)=>{
                        return(
                            <span style={{marginLeft:5}}>{v.title}&emsp;
                            {
                                getFieldDecorator(v.dataIndex,{
                                    rules: [{ required: true, message: '必填' }],
                                   })
                                (renderItem(v))
                            }
                            </span>
                        )
                    })
                } 
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form>
               {
                   publicId=='22'&&
                   <Form style={{marginLeft:5}}>员工性别:&emsp;
                   {
                       getFieldDecorator('set',{
                           rules:[{required:true,message:'必填'}],
                       })
                       (
                           <RadioGroup>
                               <Radio value='male'>男</Radio>
                               <Radio value='female'>女</Radio>
                           </RadioGroup>
                       )
                   }
                   </Form>
               }
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form>

               {
                   publicId=='22'&&
                   <Form style={{marginLeft:5}}>员工类别:&emsp;
                   {
                       getFieldDecorator('set',{
                           rules:[{required:true,message:'必填'}],
                       })
                       (
                           <RadioGroup>
                               <Radio value='DL'>DL</Radio>
                               <Radio value='IDL'>IDL</Radio>
                           </RadioGroup>
                       )
                   }
                   </Form>
               }
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form>
               {
                   <Form style={{marginLeft:5}}>Mail:&emsp;
                   {
                       getFieldDecorator('mail',{
                        rules: [{ required: true, message: '必填' }], 
                       })
                       (<Input style={{width:150}}/>)
                   }
                   </Form>
               }
           </Form>
           <div>&emsp;&emsp;&emsp;&emsp;</div>
           <Form>
           {
                   <Form style={{marginLeft:5}}>用途:&emsp;
                   {
                       getFieldDecorator('func',{
                        rules: [{ required: true, message: '必填' }], 
                       })
                       (<TextArea style={{width:300,height:80}}/>)
                   }
                   </Form>
               }
           </Form>
          
          <Link to='/system-setting'>
           <Button 
           style={{marginLeft:500,width:100}}
           onClick={submit}
           >
               新增
           </Button>
           </Link>
           </Fragment>
        )
    }
}

export default Form.create()(EachOne);


