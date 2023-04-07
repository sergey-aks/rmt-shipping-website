import React, { Component } from 'react';
import PropTypes from "prop-types";
// import { HashLink as Link } from 'react-router-hash-link';
//Установка react-scroll: npm install react-scroll (отсюда https://www.npmjs.com/package/react-scroll)
// import { Link } from 'react-scroll'
//Установка YamdexMap: npm install --save react-yandex-maps (отсюда https://reactjsexample.com/yandex-maps-api-bindings-for-react/)
import { YMaps, Map,  Placemark } from 'react-yandex-maps';
import mapImage from '../../assets/img/ship.png';
import rmt_1_Image from '../../assets/img/ships/small/rmt_1.jpg';
import meganisiImage from '../../assets/img/ships/small/meganisi.jpg';
import miraxImage from '../../assets/img/ships/small/mirax.jpg';
import sky_seaImage from '../../assets/img/ships/small/sky_sea.jpg';
import uralImage from '../../assets/img/ships/small/ural.jpg';
import magnitkaImage from '../../assets/img/ships/small/magnitka.jpg';


// import $ from "jquery";

// Задаем массив с данными для всех кораблей
const shipsValues = {
  items: [
    "RMT - 1",
    "MEGANISI",
    "MIRAX",
    "SKY SEA",
    "УРАЛ",
    "МАГНИТКА"
  ],
  images: [
    rmt_1_Image,
    meganisiImage,
    miraxImage,
    sky_seaImage,
    uralImage,
    magnitkaImage
  ],
  coordinates: [
    [60.044138, 29.032243], //RMT - 1
    [59.657891, 24.681657], //MEGANISI
    [44.038392, 35.335732], //MIRAX
    [36.175971, 14.681766], //SKY SEA
    [52.799828, 4.104646], //УРАЛ
    [38.634652, 12.001341] //МАГНИТКА
  ],
  names: [
    "rmt_1",
    "meganisi",
    "mirax",
    "sky_sea",
    "ural",
    "magnitka"
  ]
};

// Задаем массивы для balloonContentBody
var balloon = [];

// Создаем шаблон для всплывающих balloonContentBody на карте
for (var i = 0; i < shipsValues.items.length; i++) {

  balloon[i] = ['<div className="ship_img_wrapper"><img src=' + shipsValues.images[i] + ' alt="" border="0"/></div><div className="ship_name_wrapper"><span className="ship_name">«' + shipsValues.items[i] + '»</span><br>Универсальное сухогрузное судно</div><div className="clear"></div><span className="note_coord">Координаты судна: ' + shipsValues.coordinates[i] + '</span><br>'];
   
}
// Задаем первоночальное положение карты
var mapStateLocal = { controls: ['zoomControl'], center: [60.013159405757584, 27.828045393527912], zoom: 7 };
// Координаты и масштаб для всех кораблей
const mapAllShipsState = { controls: ['zoomControl'], center: [48.802029, 10.977064], zoom: 3 };

// Кнопка Свернуть / Развернуть блок с кнопками на карте
class ClickButton extends React.Component {

  static propTypes = {
    active: PropTypes.bool.isRequired,
  }

  render() {

    const {
      active,
      ...other
    } = this.props;

    return <div
      className={active ? "decrease" : "visible"}
      {...other}
    >
      {active ? <span className="arrow-decrease">‣</span> : <span className="arrow-visible">‣</span>}
    </div>;
  }
}

// Yandex Map
export class YandexMap extends Component {

  // Функция для кнопки  Resize для карты
  resizeMap(prevProps) {
    if (prevProps.small) {
      return { width: '100%', height: 700, small: false };
    } else {
      return { width: '100%', height: 400, small: true };
    }
  }
  // Функция для кнопки Установка координат карты по положению выбранного корабля
  stateLocal(index) {
    return (mapStateLocal = { controls: ['zoomControl'], center: shipsValues.coordinates[index], zoom: 7 });
  }
  // Функция для кнопки Установка координат карты для показа всех кораблей
  allShipsLocal() {
    return (mapStateLocal = mapAllShipsState);
  }


  // Устанавливаем первоначалные размеры карты
  state = {
    width: '100%',
    height: 400,
    small: true,
    active: false,
  };

// React+jQuery Component
  // componentDidMount(){

  //   const {
  //     wrapper,
  //   } = this;

  //   // console.log("wrapper", wrapper);

  //   $(wrapper).on("click", function(){
  //     $(this).toggleClass("fdsfsdfsdfdsf")
  //   });

  // }

  render() {
    const {
      width,
      height,
      small,
      active,
    } = this.state;

    // Вывод Placemark-ов для карты
    let marks = shipsValues.coordinates.map((n, index) => {

      const key = shipsValues.items[index];

      return <Placemark
        key={key}
        defaultGeometry={n}
        properties={{
          hintContent: shipsValues.items[index],
          balloonContentBody:
            [balloon[index]],
        }}
        modules={
        ['geoObject.addon.balloon', 'geoObject.addon.hint']
    }
        options={{
          iconLayout: 'default#image',
          iconImageHref: mapImage,
          iconImageSize: [70, 26],
        }}
      />;
    });
    // Вывод списка кораблей
    let ships = shipsValues.items.map((n, index) => {
      const key = shipsValues.coordinates[index];
      return <div key={key} onClick={() => this.setState(this.stateLocal(index))}>{n}</div>
    });
    // Вывод карты

    // console.log("this.wrapper", this.wrapper);
    
    return (
      <YMaps
        query={{
          ns: 'use-load-option',
          load:
            'Map,Placemark,control.ZoomControl,geoObject.addon.balloon',
        }}
      >
        <div id="map-basics" className="map-basics-wrapper">
          <Map state={mapStateLocal} width={width} height={height} >
            {/* Вывод Placemark */}
            {marks}
          </Map>
          <div
            className={["map-ships-control", active ? "decrease" : "visible"].join(" ")}

            // ref для React+jQuery Component
            // ref={element => {
            //   this.wrapper = element;
            // }}
          >
            {/* Кнопка Свернуть / Развернуть блок с кнопками на карте */}
            <ClickButton
              active={active}
              onClick={() => {
                this.setState({
                  active: !active,
                });
              }}
            />

            {/* Вывод кнопки Увеличить-Свернуть карту */}
            <div onClick={() => this.setState(this.resizeMap)}>
              {small ? 'Увеличить карту' : 'Свернуть карту'}
            </div>
            {/* Вывод списка кораблей */}
            {ships}
            {/* Вывод кнопки Все корабли */}
            <div onClick={() => this.setState(this.allShipsLocal)}>
              {'Все корабли'}
            </div>

          </div>
        </div>
      </YMaps>
    );
  }
}


