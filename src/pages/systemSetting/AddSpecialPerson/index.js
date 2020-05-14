import React,{Component,Fragment} from 'react';
import{connect }from 'react-redux';
import {Card,Radio, Select, message, Button} from 'antd';
import {actionCreators} from './store';
import RadioGroup from 'antd/lib/radio/group';
import EachOne from './component/EachOne';
import BatchSubmit from './component/BatchSubmit';
class AddSpecialPerson extends Component {

    render(){

         const {type,showBtn,publicId}=this.props;
         const {selecttype,isPublic,submit,handleUpload,upLoad,isshowBtn}=this.props;
        return(
            <Fragment>
            <Card
            title='新增特殊人员'
            bordered={false}
            headStyle={{color:'#666'}}
            style={{margin:5}}
            >
            <span style={{marginLeft:5}}>选择新增方式 :&emsp;</span>
            <RadioGroup
            onChange={selecttype}
            >
                <Radio value='1'>逐笔新增</Radio>
                <Radio value='2'>批量上传</Radio>
            </RadioGroup>
            <div>&emsp;&emsp;&emsp;&emsp;</div>
            <div>
                {
                    type==1&&
                   <EachOne
                   isPublic={isPublic}
                   publicId={publicId}
                   submit={submit}
                   />
                }
            </div>
            <div>
                {
                    type==2&&
                    
                    <BatchSubmit
                    success={handleUpload}
                    isshowBtn={isshowBtn}
                    />
                }
                {
                 showBtn&&
                 <Button
                 onClick={upLoad}
                 >完成</Button>  
                }
            </div>
        </Card>
           </Fragment>
        )
    }
}

const mapStateToProps=(state)=>{
    const {type,publicId,showBtn}
    =state.addPersonReducer.addSpecialPersonReducer;
    return {type,publicId,showBtn}
  }
const mapDispatchToProps=(dispatch)=>{
    return{
         selecttype(e) {
            dispatch(actionCreators.selecttype(e.target.value))
        },
        isPublic(value){
             dispatch(actionCreators.isPublic(value))
        },
        submit(value){
            // dispatch(actionCreators.submit(value));
            message.warn('填写成功');
        },
        handleUpload(file){
            dispatch(actionCreators.saveUploadFile(file))
        },
        upLoad(){
           dispatch(actionCreators.upLoad())
        },
        isshowBtn(){
            dispatch(actionCreators.showBtnState(false))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddSpecialPerson)