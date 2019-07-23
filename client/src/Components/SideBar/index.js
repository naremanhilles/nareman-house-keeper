import React, { Component } from 'react'
import auth from '../../auth/auth';
import NavElement from './NavElement'
import elements from './staticData';
import './index.css'

export default class SideBar extends Component {

  handleChange = ({ target: { value, name } }) => {
    this.setState(({ errormsg }) => {
      const newErrormsg = { ...errormsg };
      newErrormsg[name] = '';
      return { [name]: value, errormsg: newErrormsg };
    });
  };

  handleLogout = () => {
    console.log(111111111111)
    fetch('/api/v1/logout')
      .then(res => res.json())
      .then(res => {
        if (res.data === 'success') {
          console.log(11111, 'rrrrrrrr')
          auth.logout();
          // this.props.isLoggedOut();
          this.props.history.push('/');
        }
      })
      .catch(err => console.log(err));
  }


  render() {
    const { menuOpen, handleLinkClick } = this.props;

    if (menuOpen) {
      return (
        <div className='SideBar'>
          <div>
            {elements.map(item =>
              <span key={item.id}>
                {(item.text !== 'خروج') ? (
                  <NavElement link={item.link} text={item.text}
                    icon={item.icon}
                    handleLinkClick={handleLinkClick} />
                ) : (
                    <NavElement text={item.text}
                      icon={item.icon}
                      handleLinkClick={this.handleLogout} />
                  )}
              </span>
            )}
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}



