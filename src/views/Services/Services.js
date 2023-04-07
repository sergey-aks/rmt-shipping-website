import React, { Component } from 'react';
import { TitleServices } from '../../components/Services';
import { Services } from '../../components/Services';



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
        <section className="page-content-wrapper service-wrapper">
          <h1 name="services"><TitleServices /></h1>
          <Services />
        </section>
      </div>
    );
  }
}

export default MainPageContent;
