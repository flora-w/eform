import React,{ useState, useEffect } from 'react';
import {  Link, withRouter } from 'react-router-dom';
import PropsType from 'prop-types';
import { Input,Menu } from 'antd';
import * as style from './index.scss';
import { SystemSetting } from '../config/navConfig';

const { SubMenu } = Menu;
const { Search } = Input;
const LeftNav = props => {

  
  const [nav, setNav] = useState(props.navConfig['ZH_CN']);
  const currentHash = props.location.pathname;
  useEffect(() => {
    const LANG = (localStorage.getItem('Lang') === 'ZH_CN' || localStorage.getItem('Lang') === null )? 'ZH_CN' : 'ZH_EN';
    const path = props.location.pathname;
    setNav(() => {
      let temp = props.navConfig[LANG].children.map( v => ({...v, actived: v.path === path ? v.actived = true : v.actived = false}));
      return {...props.navConfig[LANG], children: temp,}
    })
  }, [props, props.navConfig])
  const handleClickLink = (path) => {
    setNav(() => {
      nav.children.forEach( v => v.path === path ? v.actived = true : v.actived = false)
      return nav
    })
  }
  // console.log( nav.children);
  return <>
  
  {
      (currentHash.includes('agent-setting') || currentHash.includes('system-setting'))&&
        <div className={style.leftNav}>
          <div>
            <h2>{nav.title}</h2>         
          </div>
          <div  className={style.leftNav_lists}>
            <ul>
              {
                nav.children.map( v => (
                  <>
                  {
                    !v.children &&
                    <Link to={v.path} key={v.path} onClick={() => handleClickLink(v.path)}>
                      <li className={v.actived ? style.li_actived : '' }>
                        {v.title}
                        {/* <i className='iconfont iconarrow'></i> */}
                      </li>
                    </Link>
                  }
                  </> 
                ))
              }
            </ul>
          </div>
        </div>
    }


    {
      (!currentHash.includes('agent-setting') && !currentHash.includes('system-setting')) &&
        <div className={style.leftNav}>
          <div>
            <h2>{nav.title}</h2>         
          </div>
          <div  className={style.leftNav_lists}>
            <ul>
              {
                nav.children.map( v => (
                  <> 
                  <Menu
                  // mode="inline"
                   style={{backgroundColor:'#f2f2f2'}}
                   >
                    <SubMenu title={v.title}>
                  {
                    v.children.map((k)=>(
                      <Menu.Item key={k.title}>
                        <Link to={k.path} key={k.path} onClick={() => handleClickLink(v.path)}>
                         <li className={k.actived ? style.li_actived : '' }>
                          {k.title}
                         </li>
                        </Link>
                      </Menu.Item>
                    ))
                  }
                 </SubMenu>
                  </Menu>
                  </> 
                 )
                )
              }
            </ul>
          </div>
        </div>
    }
  
  </>
}
SystemSetting.PropsType = {
  navConfig: PropsType.object.isRequired
}

export default withRouter(LeftNav);


