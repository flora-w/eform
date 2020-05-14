import React,{ useEffect,useState ,Component} from 'react';
import { Badge } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import SignTable from './components/signTable';
import {SignCenter as SignTab} from '../../../config/navConfig';
import * as style from './index.scss';
import {connect} from 'react-redux';
import store, { actionCreators, actionTypes } from './store';
// import { actionCreators } from '../login/store';


const Sign = (props) => {
  const [Tab, setTab] = useState(SignTab['ZH_CN']);
   useEffect(() => {
    const LANG = (localStorage.getItem('Lang') === 'ZH_CN' || localStorage.getItem('Lang') === null )? 'ZH_CN' : 'ZH_EN';
    const path = props.location.pathname;
    setTab(() => {
      let temp = SignTab[LANG].children.map( v => ({...v, actived: v.path === path ? v.actived = true : v.actived = false}));
      return {...SignTab[LANG], children: temp}
    })
  }, [props])
  const handleClickLink = (path) => {
    setTab(() => {
      Tab.children.forEach( v => v.path === path ? v.actived = true : v.actived = false)
      return Tab
    });
  }
  const say=(id)=>{
    props.getPageData(id);
    props.currPage(id) ;
  }


const id=props.match.params.id;
// getPageData(id);
// console.log(props);
//  props.getPageData(id);
  return (
    <div className={style.sign_container}> 
       <div className={style.sign_search}>
          <span>
            共<Badge count={4} style={{ backgroundColor: '#fff', color: '#f23030', fontSize: 17}}/>筆
          </span>
          <div className={style.tableTab} onClick={()=>say(id)}>
            {
              Tab['children'].map(v => (
                <span key={v.path}><Link to={v.path} className={v.actived ? style.tab_actived: ''} onClick={() => handleClickLink(v.path)}>{v.title}</Link></span>
              ))
            }
          </div>
       </div>
       {/* <hr/> */}
       <div>
         <SignTable 
            // dataSource={this.state.dataSource}
            />
       </div>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
       getPageData(id){
         dispatch(actionCreators.getPageData(id))   
  },
  currPage(id){
     dispatch(actionCreators.currPage(id))
  }

}
}

export default withRouter(connect(null,mapDispatchToProps )(Sign))
// export default withRouter(SignCenter);