import React,{ Component } from 'react';
import { AgentSetting as a } from '../../config/navConfig';
import LeftNav from '../../components/leftNav';
import FillFormArea from '../../components/FillFormArea';
import * as style from './index.scss';

class AgentSetting extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className={style.agent_container}>
        <LeftNav 
        navConfig={a}
        />
        <FillFormArea
         other={this.props.children}
          // other={
          //   <div>1212121212</div>
          // }
         />
      </div>
    )
  }
}

export default AgentSetting;
