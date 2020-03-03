import {ForecastItem} from './forecast-item.type';


export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastItem[];
}
