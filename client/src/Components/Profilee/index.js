import React, { Component } from "react";

import "./style.css";
import Slider from './Slider/index';
import Buttoncomponent from '../CommonComponents/Button/index';


export default class Profile extends Component {
  handleBook = e => {
    this.props.history.push('/app/book');
  };

  render() {
    return (
      <div className="profile">
        <Slider />
        <div className="home-container">
          <Buttoncomponent name="احجزي الآن" onClick={this.handleBook} className='home__submit' />
        </div>
      </div>
    );
  }
}
