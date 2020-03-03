import {WeatherDetail} from './weather-detail.type';
import {Weather} from './weather.type';

export interface ForecastItem {
    dt: number;
    main: WeatherDetail;
    weather: Weather[];
    dt_txt: string;
}
