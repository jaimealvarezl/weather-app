import {Observable} from 'rxjs';
import {Forecast} from '../types/forecast.type';
import {CurrentWeather} from '../types/current-weather.type';

export interface WeatherService {
    getForecast(query: string): Observable<Forecast>;

    getWeather(query: string): Observable<CurrentWeather>;
}
