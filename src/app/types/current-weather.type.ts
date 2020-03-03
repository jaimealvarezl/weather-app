import {WeatherDetail} from './weather-detail.type';
import {Weather} from './weather.type';

export interface CurrentWeather {
    weather: Weather[];
    base: string;
    main: WeatherDetail;
    visibility: number;
    dt: number;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
