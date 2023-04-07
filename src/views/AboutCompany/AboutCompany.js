import React, { Component } from 'react';
import { TitleAbout } from '../../components/AboutCompany';
import { AboutCompany } from '../../components/AboutCompany';



class MainPageContent extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }



  render() {
    return (

      <div className="animated fadeIn">
        <section className="page-content-wrapper about-wrapper">
          <h1 name="services"><TitleAbout/></h1>
          <AboutCompany />
        </section>
      </div>
    );
  }
}

export default MainPageContent;
