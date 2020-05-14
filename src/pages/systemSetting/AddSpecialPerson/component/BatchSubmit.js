import React,{Fragment,Component} from 'react';
import {Input,Button,Form, Upload } from 'antd';

class BatchSubmit extends Component{

    state = {
        fileList: [
        
        ],
      };

    onUpload=(file)=>{
      this.setState({
        fileList:[file],
      },()=>{
        const formData=new FormData();
        formData.append('file',file);
        this.props.success(file);
      
      });
      return false;
    }

    onRemove=(file)=>{
      this.setState((state)=>{
        const index=state.fileList.indexOf(file);
        const newFileList=state.fileList.slice();
        newFileList.splice(index,1);
        return{
          fileList:newFileList,
        };
      });
        this.props.isshowBtn(false);
    }

    render(){
       const {fileList}=this.state;

        const uploadProps = {
            name:'file',
            header:{
              authorization: 'authorization-text',
            },
            onRemove:this.onRemove,
            beforeUpload:this.onUpload,
            fileList,
            onChange: this.handleChange,
            multiple: true,
          };
        
        return(
            <div>
            <Upload {...uploadProps} fileList={this.state.fileList}>
                 <Button>
                  選擇文件
                  </Button>
            </Upload>
            </div>
        )
    }
}

export default Form.create()(BatchSubmit);