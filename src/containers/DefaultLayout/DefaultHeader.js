import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

//Установка react-scroll: npm install react-scroll (отсюда https://www.npmjs.com/package/react-scroll)
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/rmt_logo.svg'
import sygnet from '../../assets/img/brand/rmt_logo.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          href={'/'}
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/about" className="nav-link">О компании</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/services" className="nav-link">Услуги</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/contacts" className="nav-link">Контакты</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
        <Nav className="ml-auto phone-email-block" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink href="mailto:as21@mail.ru" title="Отправить e-mail"><i className="fa fa-envelope-o"></i></NavLink>
          </NavItem> */}
          <NavItem className="d-md-down-none site-phone">
            <NavLink href="tel:+79457555188"><i className="fa fa-phone-square"></i><span>+7 (945) 755 51 88</span></NavLink>
          </NavItem>
        </Nav>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
