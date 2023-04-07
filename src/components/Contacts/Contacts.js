import React, { Component } from 'react';
import { YMaps, Map,  Placemark } from 'react-yandex-maps';

export class TitleContacts extends Component {
  render() {
    return (
      "Контакты"
    );
  }
}

export class Contacts extends Component {
  
  render() {

    const coordinates = [
      [55.739808, 37.525441], //офис в Москве
      [48.696501, 13.466950] //офис в Мюнхене
    ];
    
    const YandexMap = () => (
      <YMaps>
          <Map width='100%'  height='500px' defaultState={{ center: coordinates[0], zoom: 15, }} >
            {coordinates.map(coordinate => 
              <Placemark 
                geometry={coordinate} 
                key={coordinate}
              />)
            }
          </Map>
      </YMaps>
    );

    const YandexMapMunch = () => (
      <YMaps>
          <Map width='100%'  height='500px' defaultState={{ center: coordinates[1], zoom: 15, }} >
            {coordinates.map(coordinate => 
              <Placemark geometry={coordinate} 
              key={coordinate}
              />)
            }
          </Map>
      </YMaps>
    );

    return (
      <div>
      <div className="info_block_row">
				<div className="block_1-contact">
					<h2>Адрес фирмы в РФ:</h2>
					<div className="contacts_left">
						<p>Москва, Кутузовский проезд дом 4, корпус 1, 3 этаж.</p>
					<p>Телефоны:</p>
					<ul className="adress-ul">
						<li>
              +7 (945) 755 51 88
						</li>
						<li>
              +7 (945) 785 24 11
						</li>
						<li>
              +7 (945) 785 24 12
						</li>
						<li>
              +7 (945) 785 24 12
						</li>
					</ul>
					</div>
					<div className="contacts_right map-basics-wrapper">
            <YandexMap/>
					</div>
				</div>
				
				<div className="block_2-contact">
					<h2>Адрес фирмы в Германии:</h2>
          <div className="contacts_left">
            <ul className="adress-ul">
              <li>
                Eduard-Schmid-Str. 24
              </li>
              <li>
                81541 Munchen, Deutschland
              </li>
              <li>
                тел: 089/62500843/44/45
              </li>
              <li>
                факс: 089/662012
              </li>
            </ul>
            </div>
            <div className="contacts_right map-basics-wrapper">
                <YandexMapMunch/>
              </div>
          </div>
			</div>
      </div>  
    );
  }
}


