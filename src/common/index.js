import React,{ Fragment } from 'react';
import * as style from './index.scss';
import Header from './components/header';
import Footer from './components/footer';
import Aside from './components//aside';

const Common = (props) => {
  // const [show, setShow] = useState(true);
  // useEffect(() => {
  //   let hash = window.location.hash;
  //   if( hash === '#/' || hash === '#/home'){
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true);
  //   }
  //   if(!sessionStorage.getItem('_s_f_')) sessionStorage.setItem('_s_f_',JSON.parse(1));
  // }, [])
  return (
    <Fragment>
      <Header />
      <main className={style.main}>
        {props.children}
      </main>
      <Footer />
      {/* {
        show && 
        <Aside/>
      } */}
      <Aside />
    </Fragment>
  );
}

export default Common;