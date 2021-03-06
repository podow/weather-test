import React from 'react';
import moment from 'moment';

import { SliderItem } from './styles';

import { ICity } from '../../interfaces/components/city';

import CommonSlider from '../CommonSlider';
import { CloudFilled } from '@ant-design/icons/lib';

const WeatherSlider: React.FC<{ data: any; onSlideClick: (name) => void }> = ({
  data,
  onSlideClick
}) => (
  <CommonSlider trackAddStyles={{ padding: '30px 0 15px' }} withoutArrows>
    {data?.map((item: ICity) => {
      const {
        id,
        name,
        weather,
        main: { humidity, temp, temp_min, temp_max },
        wind: { speed },
        sys: { country }
      } = item;
      return (
        <SliderItem key={id} onClick={() => onSlideClick(item)}>
          <header>
            <h2>{name}</h2>
            <div>
              <span>Min {parseInt(String(temp_min))}&#176;</span>
              <span>Max {parseInt(String(temp_max))}&#176;</span>
            </div>
          </header>
          <section>
            <div className="common">
              <img
                src={`/assets/images/flags/${country.toLowerCase()}.png`}
                alt={country}
                title={country}
                className="flag"
              />
              <h3>{moment().format('dddd')}</h3>
              <h3>{moment().format('LL')}</h3>
              <h3>Wind {speed} km/h</h3>
              <h3>
                <CloudFilled />
                &nbsp;{humidity}%
              </h3>
            </div>
            <div className="weather">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather"
              />
              <p>{weather[0].description}</p>
            </div>
            <div className="temperature">
              <h2>{parseInt(String(temp))}&#176;</h2>
            </div>
          </section>
        </SliderItem>
      );
    })}
  </CommonSlider>
);

export default WeatherSlider;
