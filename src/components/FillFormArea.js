import React from 'react';
import * as style from './index.scss';

const FillFormArea = props => {
  return (
    <div className={style.form_contaienr}>
        {props.other}
    </div>
  )
}

export default FillFormArea;
