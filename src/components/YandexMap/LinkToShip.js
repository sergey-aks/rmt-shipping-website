import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

//Установка react-scroll: npm install react-scroll (отсюда https://www.npmjs.com/package/react-scroll)
import { Link } from 'react-scroll'



const defaultProps = {};
export class LinkToShip extends Component {

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link href="/" to="about" spy={true} smooth={true} duration={500} >О компании</Link>
          </NavItem>
        </Nav>
        
      </React.Fragment>
    );
  }
}


