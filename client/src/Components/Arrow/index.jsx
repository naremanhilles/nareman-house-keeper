import React, { Component } from 'react';
import './style.css';
import SideNav from '../SideNav/index';
import { Icon } from 'antd';
import Buttoncomponent from '../CommonComponents/Button/index'
export default class Arrow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleArrowClick = e => {
    this.props.history.push({
      pathname: '/app/day',
      state: { choos: this.props.choos }
    })
  };


  render() {

    return (
      <>
         <SideNav
          history={this.props.history}
          title='حجز مدبرة'
        />
        <div>
          <h3 className='cleaning-type-title'>:طبيعة التنظيف</h3>
          <Buttoncomponent
            name="(تنظيف يومي (14شيكل"
            onClick={this.handledayClick}
            className='clean-button day'
          />
          <p className='book-paragraph'>جميع مهام التنظيف اليومية بما في ذلك كنس الأرضيات والغسيل وكي الملابس وتنظيف الحمامات والمطبخ</p>
          <Buttoncomponent
            name="(تنظيف عميق (17شيكل"
            onClick={this.handleheavyClick}
            className='clean-button'
          />
          <p className='book-paragraph'>التنظيف اليومي بالإضافة إلى تنظيف النوافذ وغسيل السجاد والكنب والستائر</p>
        </div>

        <div className="arrow">
          <Icon type="arrow-right" onClick={this.handleArrowClick} />
        </div>
      </>
    );
  }
}
