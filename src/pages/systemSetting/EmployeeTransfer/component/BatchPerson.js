import React,{component, Component} from 'react';
import {Upload,Button,Form} from 'antd';



class BatchPerson extends Component {



    render(){

        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
              if (file.status !== 'uploading') {
                console.log(file, fileList);
              }
            },
            
          };

        return(
            
            <Upload {...props}>
            <Button>
               Upload
            </Button>
          </Upload>
          
        )
    }
}

export default Form.create()(BatchPerson);