import React, { Component } from 'react';
import './style.css';
import { Icon } from 'antd';
import { DatePicker } from 'antd';
import SideNav from '../SideNav/index';


export default class Day extends Component {
  state = {
    date: null,
  }
  handleRightArrow = e => {
    if (this.state.date !== null) {
      this.props.history.push({
        pathname: '/app/hour',
        state: { choos: this.props.location.state.choos, date: this.state.date }
      })
    }
  };
  handleLeftArrow = e => {
    this.props.history.goBack();
  };
  onChange = (date, dateString) => {
    this.setState({ date: date._d });
  }
  render() {
    return (
      <>
        <SideNav
          history={this.props.history}
          title='حجز مدبرة'
        />
        <h2 className='day-title'>إختاري اليوم</h2>
        <DatePicker onChange={this.onChange} className='date' placeholder="يوم التنظيف" />
        <div className="arrow-div">
          <Icon type="arrow-right" onClick={this.handleRightArrow} />
          <Icon type="arrow-left" onClick={this.handleLeftArrow} />
        </div>
      </>
    );
  }
}
