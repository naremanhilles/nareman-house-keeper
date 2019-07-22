import React, { Fragment } from 'react';
import './style.css';
import { Icon } from 'antd';

// eslint-disable-next-line react/prop-types
const Header = ({ title, ...rest }) => {
  return (
    <Fragment>
      <div className="header">
        <div className="icon">
          <Icon type="arrow-left" onClick={() => rest.history.goBack()} />
        </div>
        <div className='title'>
          <h2 >{title}</h2>
        </div>
      </div>
    </Fragment>
  );
};


export default Header;



















