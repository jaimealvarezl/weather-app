import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {WeatherDataTypeEnum} from '../enum/weather-data-type.enum';
import {WeatherService} from './weather-service';
import {Forecast} from '../types/forecast.type';
import {CurrentWeather} from '../types/current-weather.type';
import {map} from 'rxjs/operators';
import {CrossPlatformHttpClientService} from './cross-platform-http-client.service';


@Injectable({
    providedIn: 'root'
})
export class OpenWeatherService implements WeatherService {

    constructor(private httpClient: CrossPlatformHttpClientService) {
    }

    private static isGeoposition(query: string | Coordinates): query is Coordinates {
        return !(query instanceof String);

    }

    private static getQueryParam(query: string | Coordinates): { [key: string]: any } {
        if (OpenWeatherService.isGeoposition(query)) {
            return {lat: query.latitude, lon: query.longitude};
        }
        return {q: query};
    }


    getForecast(query: string | Coordinates) {
        return this.request<Forecast>(WeatherDataTypeEnum.FORECAST, OpenWeatherService.getQueryParam(query))
            .pipe(map(forecast => {
                return {
                    ...forecast,
                    list: forecast.list.filter(forecastItem => {
                        return forecastItem.dt_txt.endsWith('09:00:00');
                    }).map(forecastItem => {
                        return {
                            ...forecastItem,
                            dt_txt: forecastItem.dt_txt.split(' ').shift()
                        };
                    })
                };
            }));
    }

    getWeather(query: string | Coordinates) {
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
