import React, { Component } from 'react';
import { TitleContacts } from '../../components/Contacts';
import { Contacts } from '../../components/Contacts';



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
        <section className="page-content-wrapper contacts-wrapper">
          <h1 name="services"><TitleContacts/></h1>
          <Contacts />
        </section>
      </div>
    );
  }
}

export default MainPageContent;
