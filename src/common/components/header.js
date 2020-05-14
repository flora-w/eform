import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import TimePicker from './timerPicker';
import * as style from '../index.scss';
import eform from '../../assets/images/eform.png';
import UserLogin from './userLogin';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opertaions: [
        // { name: '登录', url: '/login', type: 'url'},
        { name: '聯係我們', type: 'mail', mail: 'mailto:eForm/WKS/Wistron'},
        { name: '返回首頁', url: '/', type: 'url'}
      ]      
    }
  }

  render() {
    return (
      <header>
        <div className={style.eform_logo}>
          <img src={eform} alt="eform" title='eform'/>
        </div>
        <div className={style.user}>
          <div className={style.user_info_time}>
            <div><i className='iconfont iconuser_'></i>*******</div>
            <TimePicker />
            
          </div>
          <div className={style.opertaion}>
         
              {
                this.state.opertaions.map( v => (
                  <span key={v.name}>
                    {
                      v.type === 'url' &&
                      <NavLink to={v.url} exact>{v.name}</NavLink>
                    }
                    {
                      v.type !== 'url' &&
                      <a href={v.mail}>{v.name}</a>
                    }
                  </span>
                  ))
              }
          </div>
          <UserLogin />
        </div>
      </header>
    );
  }
};

export default Header;