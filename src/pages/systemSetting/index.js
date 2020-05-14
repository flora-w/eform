import React, { Component } from 'react';
import LeftNav from '../../components/leftNav';
import FillFormArea from '../../components/FillFormArea';
import { SystemSetting as a } from '../../config/navConfig';
import { system_container } from './index.scss';

class SystemSetting extends Component {
  render() {
    return (
      <div className={system_container}>
          <LeftNav navConfig={a}/>
          <FillFormArea other={this.props.children}/>
      </div>
    )
  }
}

export default SystemSetting;