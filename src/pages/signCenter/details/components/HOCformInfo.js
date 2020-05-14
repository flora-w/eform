import React,{Component} from 'react';

export default WrappedComponent => class extends Component{
    render(){
        const {data}=this.props;
        return(
            <ul className='form-info'>
                <li><b>表单号</b><span className='content'>{data.SequenceID}</span></li>
                <li><b>目前步骤</b><span className='content'>{data.StepName}</span></li>
             {
              data.ToBeSignedName && <li><b>待簽核人</b> <span className="content">{data.ToBeSignedName}</span></li>
            }
            <li><b>填單人</b> <span className="content">{data.ApplyName}</span></li>
            <li><b>填單時間</b> <span className="content">{data.ApplyDateTime}</span></li>
           <WrappedComponent  {...this.props}/>
            </ul>
        );
    }
}