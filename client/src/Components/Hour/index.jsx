import React, { Component } from 'react';
import './style.css';
import { Icon } from 'antd';
import SideNav from '../SideNav/index';
import { TimePicker } from 'antd';
import { InputNumber } from 'antd';


export default class Hour extends Component {
  state = {
    time: null,
    no_hours: 2,
  }

  handleRightArrow = e => {
    if (this.state.time !== null) {
      this.props.history.push({
        pathname: '/app/confirm',
        state: { choos: this.props.location.state.choos, date: this.props.location.state.date, time: this.state.time, no_hours: this.state.no_hours }
      })
    }
  };
  handleLeftArrow = e => {
    this.props.history.goBack();

  };
  onChange = (time, timeString) => {
    this.setState({ time: timeString });
  }
  houreonChange = (value) => {
    this.setState({ nhours: value });
  }

  render() {
    return (
      <>
        <SideNav
          history={this.props.history}
          title='حجز مدبرة'
        />
        <h2 className='day-title'>عدد الساعات</h2>
        <InputNumber min={2} max={6} defaultValue={2} onChange={this.houreonChange} className='date' />
        <h2 className='day-title'>:ساعة البدء</h2>
        <TimePicker use12Hours format="h:mm a" onChange={this.onChange} placeholder="اختاري ساعة" className='date' />
        <div className="arrow-div">
          <Icon type="arrow-right" onClick={this.handleRightArrow} />
          <Icon type="arrow-left" onClick={this.handleLeftArrow} />
        </div>
      </>
    );
  }
}
