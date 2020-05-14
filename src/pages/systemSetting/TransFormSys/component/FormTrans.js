import React,{Fragment,Component} from 'react';
import {message,Radio,Form, Input, Upload, Button} from'antd';
class FormTrans extends Component{

 

    render(){

        
   const  getReasonType=(e)=>{
        const data=e.target.value;
         this.props.getReasonType(data);
     }
     const submitFormTrans =(form)=>{
         
          form.validateFields((err,values)=>{
              if(!err){
                  this.props.submitFormTrans(values)
              }else{
                  message.warn('err')
              }
          })
     }
        const{form,form:{getFieldDecorator,validateFields},reasonsome,sequenceid}=this.props
        return(
            <Fragment>
                <div>
                <span style={{marginLeft:5}}>表單號:&emsp;&emsp;
                   {sequenceid}
                </span>
                </div>
                <div>&emsp;&emsp;&emsp;&emsp;</div>
                <div>
                    <span style={{color:'red'}}>*</span>
                    <span style={{marginLeft:5}}>原因:&emsp;&emsp;
                      {
                          getFieldDecorator('reason',{
                              rules:[{required:true,message:'请填写完整'}]
                          })
                          (
                            <Radio.Group 
                            onChange={getReasonType}
                            >
                            <Radio value='1'>ITSR</Radio>
                            <Radio value='2'>附件</Radio>
                            <Radio value='3'>其他</Radio>
                          </Radio.Group>
                          )
                      }
                    </span>
                </div>
                <div>&emsp;&emsp;&emsp;&emsp;</div>
                <div>
                    <span style={{color:'red'}}>*</span>
                    <span style={{marginLeft:5}}>转签至:&emsp;&emsp;
                      {
                          getFieldDecorator('newid',{
                              rules:[{required:true,message:'请填写完整'}]
                          })
                          (
                           <Input
                           style={{width:200}}
                           />
                          )
                      }
                      <span>&emsp;&emsp;</span>
                      {
                          reasonsome==1&&
                          <span>
                          <span style={{marginLeft:5}}>ITSR单号:&emsp;&emsp;
                          {
                              getFieldDecorator('itsrform',{
                                //   rules:[{required:true,message:'请填写完整'}]
                              })
                              (
                               <Input
                               style={{width:200}}
                               />
                              )
                          }
                          </span>
                          </span>
                      }
                          {
                          reasonsome==2&&
                          <span>
                          <span style={{marginLeft:5}}>上传附件:&emsp;&emsp;
                          {
                              getFieldDecorator('file',{
                                //   rules:[{required:true,message:'请填写完整'}]
                              })
                              (
                               <Upload
                               style={{width:200}}
                               ><Button>選擇</Button>
                                </Upload>
                              )
                          }
                          </span>
                          </span>
                      }
                       {
                          reasonsome==3&&
                          <span>
                          <span style={{marginLeft:5}}>详细说明:&emsp;&emsp;
                          {
                              getFieldDecorator('detail',{
                                //   rules:[{required:true,message:'请填写完整'}]
                              })
                              (
                               <Input
                               style={{width:200}}
                               />
                              )
                          }
                          </span>
                          </span>
                      }
                    </span>
                </div>
                <div>&emsp;&emsp;&emsp;</div>
                <Button
                style={{marginLeft:200}}
                onClick={()=>submitFormTrans(form)}
                >
                    完成
                </Button>
            </Fragment>
        )
    }
}

export default Form.create()(FormTrans) 