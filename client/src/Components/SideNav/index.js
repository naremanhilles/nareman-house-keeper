import React, { Component } from 'react';
import SideBar from '../SideBar';
import Header from '../Headerr';

export default class SideNav extends Component {
  state = {
    menuOpen: false
  }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {

    const { menuOpen } = this.state;
    const { handleMenuClick, handleLinkClick } = this;

    return (
      <div>
        <Header handleMenuClick={handleMenuClick} menuOpen={menuOpen} title={this.props.title} />
        <SideBar
          handleLinkClick={handleLinkClick}
          menuOpen={menuOpen}
          history={this.props.history}
        />

      </div>



    )
  }
}

