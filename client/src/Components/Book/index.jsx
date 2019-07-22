import React, { Component } from 'react';
import './style.css';
import SideNav from '../SideNav/index';
import Arrow from '../Arrow/index';
import Buttoncomponent from '../CommonComponents/Button/index';

export default class Book extends Component {
  state = {
    arrow: false,
    choos: '',
  }
  handledayClick = e => {
    e.preventDefault();
    this.setState({ choos: 'daily' });
    this.setState({ arrow: !this.state.arrow });
  }
  handleheavyClick = e => {
    e.preventDefault();
    this.setState({ choos: 'heavy' });
    this.setState({ arrow: !this.state.arrow });
  }
  render() {
    const { arrow } = this.state;
    return arrow ? (<Arrow history={this.props.history} choos={this.state.choos} />) : (
      <>
        <SideNav
          history={this.props.history}
          title='حجز مدبرة'
        />
        <div>
          <h3 className='cleaning-type-title'>طبيعة التنظيف:</h3>
          <Buttoncomponent
            name="تنظيف يومي ( 14 شيكل)"
            onClick={this.handledayClick}
            className='clean-button day'
          />
          <p className='book-paragraph'>جميع مهام التنظيف اليومية بما في ذلك كنس الأرضيات والغسيل وكي الملابس وتنظيف الحمامات والمطبخ.</p>
          <Buttoncomponent
            name="تنظيف عميق (17 شيكل)"
            onClick={this.handleheavyClick}
            className='clean-button'
          />
          <p className='book-paragraph'>التنظيف اليومي بالإضافة إلى تنظيف النوافذ وغسيل السجاد والكنب والستائر.</p>
        </div>
      </>
    );
  }
}
