import React, { Component } from 'react';
import './style.css';
import Buttoncomponent from '../CommonComponents/Button/index';
import helpimg from './help..jpg';
import SideNav from '../SideNav/index'

export default class Help extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleQusetions = e => {
    this.props.history.push('/questions');
  };

  handleChat = e => {
    this.props.history.push('/chat');
  };

  handleCall = e => {
    this.props.history.push('/call');
  };

  render() {
    return (
      <div className="">
        <SideNav
          history={this.props.history}
          title='Help'
        />
        <p className='help-parghraph'>We would be happy to answer your questions via chat or phone</p>
        <div className="">
          <Buttoncomponent
            name="Frequently Asked Questions"
            onClick={this.handleQusetions}
            className='help-button'
          />
          <Buttoncomponent
            name="Chat With Us" onClick={this.handleChat} className='help-button' />
          <Buttoncomponent name="Call Us" onClick={this.handleCall} className='help-button' />
        </div>
        <img src={helpimg} width="100%" height="150px;" alt="help" className='help-img' />
      </div>
    );
  }
}
