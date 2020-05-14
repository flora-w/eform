import React from 'react';
import { SignCenter } from '../../config/navConfig';
import * as style from '../index.scss';

const Footer = () => {

  return (
    <footer>
      <div className={style.menu}><i className='iconfont iconwindows10'></i>菜單</div>
      <div className={style.userMenu}>
        {/* {
          SignCenter['ZH_CN'].children.map( v => (
            <span 
              key={v.title}
              >
              { v.count !== 0 && <span>{v.count}</span> }
              {v.title}
            </span>
            ))
        } */}
      </div>
    </footer>
  );
}

export default Footer;