import React, { Component } from 'react';
import { YandexMap } from '../../components/YandexMap';
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
        <YandexMap />
        <section className="page-content-wrapper fleet-wrapper">
          <h1 id="about"><TitleFleet /></h1>
          <Fleet />
        </section>
      </div>
    );
  }
}

export default MainPageContent;
