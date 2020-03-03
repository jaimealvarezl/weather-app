import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WeatherDataTypeEnum} from '../enum/weather-data-type.enum';
import {WeatherService} from './weather-service';
import {Forecast} from '../types/forecast.type';
import {CurrentWeather} from '../types/current-weather.type';

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherService implements WeatherService {

    constructor(private httpClient: HttpClient) {
    }


    getForecast(query: string) {
        return this.request<Forecast>(WeatherDataTypeEnum.FORECAST, {q: query});
    }

    getWeather(query: string) {
        return this.request<CurrentWeather>(WeatherDataTypeEnum.WEATHER, {q: query});
    }

    private request<T>(weatherType: WeatherDataTypeEnum, params?: { [key: string]: string }) {
        return this.httpClient.get<T>(`${environment.openWeatherApiUrl}/${weatherType}`, {
            params: {
                ...params,
                units: 'imperial',
                appid: environment.openWeatherApiKey,
            }
        });
    }

}
