import React, { Component } from 'react';

import rmt_1_Image from '../../assets/img/ships/rmt_1.jpg';
import meganisiImage from '../../assets/img/ships/meganisi.jpg';
import miraxImage from '../../assets/img/ships/mirax.jpg';
import sky_seaImage from '../../assets/img/ships/sky_sea.jpg';
import uralImage from '../../assets/img/ships/ural.jpg';
import magnitkaImage from '../../assets/img/ships/magnitka.jpg';

export class TitleFleet extends Component {
	render() {
		return (
			"Флот"
		);
	}
}

export class Fleet extends Component {

	render() {
		return (
			<div className="flot_wrapper">
				<div className="flot_title" id="rmt_1">
					<h2>RMT-1</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(0,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={rmt_1_Image} alt="RMT-1" title="RMT-1" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>3,750</td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>РМРС, КМ III СП</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1999 год, Россия</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Мальта</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>3,185</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>1,760</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>107,4</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>16,5</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>3,84</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>11</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>11,5</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr>
									<td>1 трюм, м.</td>
									<td>21,6 х 12,34 х 6,05</td>
								</tr>
								<tr>
									<td>3 трюм, м.</td>
									<td>22,2 х 12,34 х 6,05</td>
								</tr>
								<tr>
									<td>2 трюм, м.</td>
									<td>21,0 х 12,34 х 6,05</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
				<div className="line"></div>
				<div className="flot_title">
					<h2>MEGANISI</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(1,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={meganisiImage} alt="MEGANISI" title="MEGANISI" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>2,014</td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>RINA</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1986 год, Германия</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Мальта</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>1,616</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>600</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>76,12</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>11,3</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>3,92</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>9,5</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>10</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr className=" even ">
									<td>1 трюм, м.</td>
									<td>49,8 х 9,0 х 6,78</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
				<div className="line"></div>
				<div className="flot_title">
					<h2>MIRAX</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(2,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={miraxImage} alt="MIRAX" title="MIRAX" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>5,100</td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>P . R .</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1979 год, Сингапур</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Камбоджа</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>3,340</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>2,502</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>81</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>16,5</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>7,24</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>10</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>10,5</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr>
									<td>1 трюм, м.</td>
									<td>49,7 х 13,2 х 9,8</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
				<div className="line"></div>
				<div className="flot_title">
					<h2>SKY SEA</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(3,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={sky_seaImage} alt="SKY SEA" title="SKY SEA" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>4,900</td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>P . R .</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1999 год, Сингапур</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Камбоджа</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>3,150</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>2,602</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>79</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>15,9</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>6,64</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>10</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>10,5</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr>
									<td>1 трюм, м.</td>
									<td>49,7 х 13,2 х 9,8</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
				<div className="line"></div>
				<div className="flot_title">
					<h2>УРАЛ</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(4,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={uralImage} alt="УРАЛ" title="УРАЛ" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>3,286</td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>РМРС, КМ Л4 III СП</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1979 год, ЧССР</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Камбоджа</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>2,457</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>1,030</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>113,93</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>13,18</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>3,64</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>11</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>12,5</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr>
									<td>1 трюм, м.</td>
									<td>19,65 х 7,9 х 5,83</td>
								</tr>
								<tr>
									<td>2 трюм, м.</td>
									<td>19,65 х 11,2 х 5,83</td>
								</tr>
								<tr>
									<td>3 трюм, м.</td>
									<td>19,65 х 11,2 х 5,83</td>
								</tr>
								<tr>
									<td>4 трюм, м.</td>
									<td>16,5 х 11,2 х 5,83</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
				<div className="line"></div>

				<div className="flot_title">
					<h2>МАГНИТКА</h2>
					<p>Универсальное сухогрузное судно</p>
					{/* <p><a href="#" onClick="initialize(5,8);">Показать на карте</a></p> */}
				</div>
				<div className="flot_left">
					<img src={magnitkaImage} alt="МАГНИТКА" title="МАГНИТКА" width="100%" border="0" />
				</div>
				<div className="flot_right">
					<div id="container">
						<table className="ship-discription">
							<tbody>
								<tr>
									<td>Дедвейт, т.</td>
									<td>3,170 </td>
								</tr>
								<tr>
									<td>Класс</td>
									<td>РМРС, КМ Л4 III СП</td>
								</tr>
								<tr>
									<td>Постройка</td>
									<td>1978 год, ЧССР</td>
								</tr>
								<tr>
									<td>Флаг</td>
									<td>Камбоджа</td>
								</tr>
								<tr>
									<td>Регистровый тоннаж (БРТ), т.</td>
									<td>2,457</td>
								</tr>
								<tr>
									<td>Мощность силовой установки,  квт</td>
									<td>1,030</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Максимальная</td>
								</tr>
								<tr>
									<td>Длина, м.</td>
									<td>113,93</td>
								</tr>
								<tr>
									<td>Ширина, м.</td>
									<td>13,18</td>
								</tr>
								<tr>
									<td>Осадка, м.</td>
									<td>3,64</td>
								</tr>
								<tr className="selected even">
									<td colSpan="2">Скорость</td>
								</tr>
								<tr>
									<td>В грузу, узлы</td>
									<td>11</td>
								</tr>
								<tr>
									<td>В балласте, узлы</td>
									<td>12,5</td>
								</tr>
								<tr className="selected">
									<td colSpan="2">Размеры трюмов</td>
								</tr>
								<tr>
									<td>1 трюм, м.</td>
									<td>19,65 х 7,9 х 5,83</td>
								</tr>
								<tr>
									<td>2 трюм, м.</td>
									<td>19,65 х 11,2 х 5,83</td>
								</tr>
								<tr>
									<td>3 трюм, м.</td>
									<td>19,65 х 11,2 х 5,83</td>
								</tr>
								<tr>
									<td>4 трюм, м.</td>
									<td>16,5 х 11,2 х 5,83</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
}


