import React, { Component } from 'react';
import { TitleFleet } from '../../components/Fleet';
import { Fleet } from '../../components/Fleet';



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
        <section className="page-content-wrapper fleet-wrapper">
          <h1 name="services"><TitleFleet/></h1>
          <Fleet />
        </section>
      </div>
    );
  }
}

export default MainPageContent;
