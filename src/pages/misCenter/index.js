import React,{ Component } from 'react';
import LeftNav from '../../components/leftNav';
import FillFormArea from '../../components/FillFormArea';
import * as style from './index.scss';
import {MisCenter as a } from '../../config/navConfig';

class MisCenter extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className={style.mis_container}>
          <LeftNav navConfig={a} />
          <FillFormArea other={this.props.children}/>
       
      </div>
    )
  }
}

export default MisCenter;