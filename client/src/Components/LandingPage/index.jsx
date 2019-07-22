import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import Buttoncomponent from '../CommonComponents/Button/index';

export default class LandingPage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleRegster = e => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <div className='landing-page-container'>
        <Slider />
        <Buttoncomponent
          name="تسجيل الدخول من خلال رقم الهاتف المحمول"
          onClick={this.handleRegster}
          className='landing-page-container-reg-button'
        />
        <div className='landing-page-container-link'>
          لديك حساب سابق بالفعل{' '}
          <Link to="/login" className="content-signup__word-login">
            دخول
          </Link>
        </div>
      </div>
    );
  }
}
