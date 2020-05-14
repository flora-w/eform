import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as style from './index.scss';
import adm from '../../assets/images/adm.png';
import fd from '../../assets/images/fd.png';
import customs from '../../assets/images/customs(已去底).png';
import eng from '../../assets/images/eng.png';
import hr from '../../assets/images/HR.png';
import mis from '../../assets/images/mis.png';
import more from '../../assets/images/more.png';
import sign from '../../assets/images/sign.png';
import fclt from '../../assets/images/FCLT.png';
import wea from '../../assets/images/wea.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {img: sign, title: '簽核中心', background: '#019E97', other: [], url: '/sign/0', show: false},
        {img: mis, title: '資訊服務中心', background: '#EB840D', other: [], url: '/mis_center', show: false},
        {img: hr, title: '人事服務中心', background: '#0D4A83', other: [], url: '/personal_center', show: false},
        {img: adm, title: '行政服務中心', background: '#327BC0', other: [], url: '/admin_center', show: false},
        {img: customs, title: '關務服務中心', background: '#EBBE0D', other: [], url: '/customs_center', show: false},
        {img: fd, title: '財務服務中心', background: '#009A44', other: [], url: '/finance_center', show: false},
        {img: eng, title: '工程服務中心', background: '#EA69A2', other: [], url: '/engineer_center', show: false},
        {img: fclt, title: '廠務服務中心', background: '#BD1BD0', other: [], url: '/factory_center', show: false},
        {img: more, title: '其他', background: '#E34542', other: [], url: '/other', show: false},
      ],
    }
  }

  handleShowList = (e,data) => {
    e.stopPropagation();
    // e.preventDefault();
    let temp = this.state.list;
    temp = temp.map(v => {
      if(v.background === data){
        v.show = true;
        return v;
      }
      return v;
    })
    this.setState(() => ({
      list: temp
    }))
  }

  handleHideList = (e,data) => {
    e.stopPropagation();
    // e.preventDefault();  
    let temp = this.state.list;
    for(let i = 0,len = temp.length; i < len ; i ++){
      if(temp[i].background === data ){
        temp[i].show = false;
      }
    }
    setTimeout(() => {
      this.setState(() => ({
        list: temp
      }))
    },100)
  }

  render() {
    const { handleShowList, handleHideList } = this;

    return (
      <div className={style.home_container}>
          <div className={style.home_main_right}>
            <div><img src={wea} alt=""/></div>
            <div className={style.home_user_settings}>              
                <NavLink to='/system-setting'><div style={{background:'#7F628E'}}><i className='iconfont iconsetting'></i>系統管理</div></NavLink>
                <NavLink to='/agent-setting'><div style={{background:'#6C6FC0'}}><i className='iconfont iconuser-settings-line'></i>代理人設定</div></NavLink>
            </div>
          </div>
          <div className={style.home_main_left}>
            {
              this.state.list.map( (v,k) => (
                <div style={{background: v.background}} key={v.background}>
                  <NavLink to={v.url}><img src={v.img} alt=""/></NavLink>           
                  <NavLink to={v.url}><h3>{v.title}</h3></NavLink>                 
                  {
                    v.background !== '#019E97' && 
                    <div>
                      <ul>
                        {
                          (v.show && k>5) &&
                          <div className={style.li_show_before} onMouseEnter={(e) => handleShowList(e,v.background)} onMouseLeave={(e) => handleHideList(e,v.background)}></div>
                        }
                        
                        {/* <span>填单&emsp;</span>
                        <span>查询&emsp;</span>
                        <span>维护&emsp;</span> */}
                        {/* <li onMouseEnter={(e) => handleShowList(e,v.background)} onMouseLeave={(e) => handleHideList(e,v.background)}>填單</li>
                        <li onMouseEnter={(e) => handleShowList(e,v.background)} onMouseLeave={(e) => handleHideList(e,v.background)}>查詢</li>
                        <li onMouseEnter={(e) => handleShowList(e,v.background)} onMouseLeave={(e) => handleHideList(e,v.background)}>維護</li> */}
                        {
                          (v.show && k<=5) &&
                          <div className={style.li_show_after} onMouseEnter={(e) => handleShowList(e,v.background)} onMouseLeave={(e) => handleHideList(e,v.background)}></div>
                        }
                      </ul>
                    </div>
                  }
                </div>
              ))
            }
          </div>
      </div>
    );
  }
}

export default Home;