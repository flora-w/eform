import React,{ Component} from 'react';
import * as style from '../index.scss';

// eslint-disable-next-line no-unused-vars
let time_picker = null;
class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '0123456789',
      year: 1970,
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
    }
  }

  formate = time => time.toString()[1] ? time.toString() : '0' + time.toString()[0];

  timePicker = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
      this.setState(() => ({year, month, day,
        minute: this.formate(min), 
        hour: this.formate(hour),
        second: this.formate(sec)
      }));
  }
  componentDidMount() {
    this.time_picker = setInterval(this.timePicker ,1000);
  }
  render () {
    const { year, month, day, hour, minute, second } = this.state;
    return (
      <div className={style.user_time}>
        <div>
        {year}年{month}月{day}日&nbsp;&nbsp;
        <span>
          <span>{hour}</span>
        </span>
        &nbsp;:&nbsp; 
        <span>
          <span>{minute}</span>
        </span>
        &nbsp;:&nbsp;
        <span>
          <span>{second}</span>
        </span>
        </div>
      </div>)
  }

  componentWillUnmount() {
    clearInterval(this.time_picker);
  }
}

export default TimePicker;  