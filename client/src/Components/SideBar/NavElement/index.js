import React from 'react';
import { NavLink } from "react-router-dom";
import './index.css'


export default function NavElement(props) {
  const { link, icon, text, handleLinkClick } = props;
  return (
    link ?
      (
        <NavLink to={link} onClick={handleLinkClick} className='SidBar-link' >
          <img src={icon} alt="icon" className='SideBar-img' />
          <h3 className='SideBar-text'>{text}</h3>
        </NavLink>
      )
      :
      (
        <NavLink to={'/login'} onClick={handleLinkClick} className='SidBar-link' >
          <img src={icon} alt="icon" className='SideBar-img' />
          <h3 className='SideBar-text'>{text}</h3>
        </NavLink>)

  )
}


