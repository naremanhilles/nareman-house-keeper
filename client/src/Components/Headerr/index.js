import React from 'react'
import './style.css'
import { Icon } from 'antd';

export default function Header(props) {
  const { handleMenuClick, title } = props;
  return (
    <div className='app-header'>
      <div className='app-icon'>
        <Icon type="menu" onClick={handleMenuClick} />
      </div>
      <h2 className='app-title'>{title}</h2>
    </div >
  )
}
