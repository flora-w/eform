import React from 'react';
import {Form,Radio,Input,Button} from 'antd';

const FormItem=Form.Item;
const RadioGroup=Radio.Group;
const TextArea=Input.TextArea;

const signOption=({form,form:{getFieldDecorator},signFormSubmit,formId})=>{
    // console.log(form);
    return(
        <Form className='sign-option'>
            <FormItem label='签核结果'>
                {
                    getFieldDecorator('result',
                    {
                        initialValue:1,
                        rules:[{required:true,message:'请选择签核结果'}]
                    })(
                        <RadioGroup name='radiogroup'>
                            <Radio value={1}>同意</Radio>
                            <Radio value={2}>驳回</Radio>
                        </RadioGroup>
                    )
                }
            </FormItem>
            <FormItem label ='签核意见'>
                {
                    getFieldDecorator('suggestion',{})
                    (
                        <TextArea />
                    )
                }
            </FormItem>
            <div>
                <Button 
                className='submit-btn'
                onClick={()=>signFormSubmit(form,formId)}
                >送出</Button>
            </div>
        </Form>
    )
}

export default Form.create()(signOption);//经过 form.create()包装过的组件，自带this.props.form属性