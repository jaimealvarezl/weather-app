import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WeatherDataTypeEnum} from '../enum/weather-data-type.enum';
import {WeatherService} from './weather-service';
import {Forecast} from '../types/forecast.type';
import {CurrentWeather} from '../types/current-weather.type';
import {Geoposition} from '@ionic-native/geolocation';

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherService implements WeatherService {

    constructor(private httpClient: HttpClient) {
    }

    private static isGeoposition(query: string | Geoposition): query is Geoposition {
        return !(query instanceof String);

    }

    private static getQueryParam(query: string | Geoposition): { [key: string]: any } {
        if (OpenWeatherService.isGeoposition(query)) {
            return {lat: query.coords.latitude, lon: query.coords.longitude};
        }
        return {q: query};
    }


    getForecast(query: string | Geoposition) {
        return this.request<Forecast>(WeatherDataTypeEnum.FORECAST, OpenWeatherService.getQueryParam(query));
    }

    getWeather(query: string | Geoposition) {
        return this.request<CurrentWeather>(WeatherDataTypeEnum.WEATHER, OpenWeatherService.getQueryParam(query));
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
