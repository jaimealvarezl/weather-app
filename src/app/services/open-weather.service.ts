import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {WeatherDataTypeEnum} from '../enum/weather-data-type.enum';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private httpClient: HttpClient) { }

  private request(weatherType: WeatherDataTypeEnum, params?: {[key: string]: string}) {
    return this.httpClient.get(`${environment.openWeatherApiUrl}/${weatherType}`, {
      params: {
        appid: environment.openWeatherApiKey
      }
    });
  }

  getForecast(query: string): Observable<any> {
    return this.request(WeatherDataTypeEnum.FORECAST, {q: query});
  }

  getWeather(query: string): Observable<any> {
    return this.request(WeatherDataTypeEnum.WEATHER, {q: query});
  }
}
