import React, { Component } from 'react';
import './style.css';
import { Icon } from 'antd';
import SideNav from '../SideNav/index';
import { Checkbox } from 'antd';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Confirm extends Component {
  state = {
    disabled: true,
    time: null,
    nhours: null,
    choos: null,
    price: null,
    net: null,
    date: null,
    h_to: null,
  }

  componentDidMount() {
    const { choos,
      date,
      time, no_hours } = this.props.location.state;
    const dateFormate = new Date(date).toUTCString().split(':')[0].split(' ').splice(0, 4).join();
    const timeFormate = Number(time.split(':')[0]) + no_hours;

    const newTimeFormate = `${timeFormate}:${time.split(':')[1]}`;

    this.setState({ nhours: no_hours, time: time, choos: choos, date: dateFormate, h_to: newTimeFormate });
    if (choos === 'daily') {
      const price = 14 * no_hours;
      const net = price - 10;
      this.setState({ price: price, net: net });
    }
    else if (choos === 'heavy') {
      const price = 18 * no_hours;
      const net = price - 10;
      this.setState({ price: price, net: net });
    }
  }
  onChange = (e) => {
    this.setState({ disabled: !this.state.disabled });
  }

  handleClick = e => {
    //route will add session for this user
  }

  handleleftArrow = e => {
    this.props.history.goBack();
  };


  render() {

    return (
      <>
        <SideNav
          history={this.props.history}
          title='حجز مدبرة'
        />
        <h3 className='day-title'>لقد قمت بحجز طلب التنظيف التالي!</h3>
        <div className='top-div'>
          <p>{this.state.date}</p>
          <p className='confirm-paragraph'>من:<span>{this.state.time}</span></p>
          <p className='confirm-paragraph'>الى:<span>{this.state.h_to}</span></p>
          <p className='confirm-paragraph'>طبيعة التنظيف:<span>{this.state.choos}</span></p>
          <p className='confirm-paragraph'>عدد الساعات:<span>{this.state.nhours}</span></p>
        </div>
        <div className='top-div background'>
          <p className='confirm-paragraph'>السعر=<span>{this.state.price}</span>شيكل</p>
          <p className='confirm-paragraph'>الخصم 10.00 شيكل</p>
          <p className='confirm-paragraph'>المبلغ الاجمالي=<span>{this.state.net}</span>شيكل</p>
        </div>
        <div className='check'>
          <Checkbox onChange={this.onChange} className=''>أوافق على</Checkbox>
          <Link to="/service" className="content-signup__word-login">
            شروط الخدمة
            </Link>
        </div>
        <Button
          variant="primary"
          type="submit"
          className="confirm-signup__submit"
          onClick={this.handleClick}
          disabled={this.state.disabled}
        >
          تأكيد الحجز
          </Button>
        <div className="confirm-arrow">
          <Icon type="arrow-left" onClick={this.handleleftArrow} />
        </div>
      </>
    );
  }
}
