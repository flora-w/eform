import React from 'react';
import * as style from '../index.scss';
import adm from '../../assets/images/adm.png';
import fd from '../../assets/images/fd.png';
import customs from '../../assets/images/customs(已去底).png';
import eng from '../../assets/images/eng.png';
import hr from '../../assets/images/HR.png';
import mis from '../../assets/images/mis.png';
import more from '../../assets/images/more.png';
import sign from '../../assets/images/sign.png';
import fclt from '../../assets/images/FCLT.png';
import {Link, NavLink } from 'react-router-dom';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asideList: [
        {title: '簽核中心', img: sign, key: 0,url:'/sign/0'},
        {title: '資訊服務中心', img: mis, key: 1,url:'/mis_center'},
        {title: '人事服務中心', img: hr, key: 2,url:'/personal_center'},
        {title: '行政服務中心', img: adm, key: 3,url:'/admin_center'},
        {title: '關務服務中心', img: customs, key: 4,url:'/customs_center'},
        {title: '財務服務中心', img: fd, key: 5,url:'/finance_center'},
        {title: '工程服務中心', img: eng, key: 6,url:'/engineer_center'},
        {title: '廠務服務中心', img: fclt, key: 7,url:'/factory_center'},
        {title: '其他', img: more, key: 8,url:'/other'},
      ],
      show: false,
    }
  }
  handleMouseEnter = () => {
    this.setState(() => ({show: true}));
  }
  handleMouseLeave = () => {
    setTimeout(() => {
      this.setState(() => ({show: false}));
    }, 300);
  }

  render() {
    return (
      <div 
        className={style.aside} 
        style={{right: this.state.show ? 0 : -50}} 
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div className={style.asideArrow} style={{opacity: this.state.show ? 0 : 1}}>
          <span>切</span>
          <span>換</span>
          <span>版</span>
          <span>塊</span>
        </div>
          {
            this.state.asideList.map( v => (
              <div key={v.key} >
                <img src={v.img} alt="" title={v.title}/>
                <div className={style.aside_item}>
                <Link to={v.url} exact>{v.title}</Link>
                  {/* <span>{v.title}
                  </span> */}
                </div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default Aside;