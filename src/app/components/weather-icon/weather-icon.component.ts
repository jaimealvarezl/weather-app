import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    styleUrls: ['./weather-icon.component.scss'],
})
export class WeatherIconComponent implements OnChanges {

    private static BASE_PATH = '/assets/weather_icons';

    @Input()
    icon: string;

    weatherImgSrc: string = null;

    constructor() {
    }

    get imgSrc() {
        const iconCode = this.icon.substring(0, 2);

        switch (iconCode) {
            case '01':
                return 'sunny';
            case '02':
            case '03':
            case '04':
                return 'overcast';
            case '09':
                return 'shower';
            case '10':
                return 'light-rain';
            case '11':
                return 'tstorm';
            case '13':
                return 'snow';
            case '50':
                return 'fog';
            default :
                return 'dunno';
        }

        switch (this.icon.toLowerCase()) {
            case 'clear sky':
                return 'sunny';
            case 'few clouds':
                return 'cloudy';
            case 'shower rain':
                return 'shower';
            case 'rain':
                return 'light-rain';
            case 'broken clouds':
                return 'overcast';
            case 'snow':
                return 'snow';
            case 'thunderstorm':
                return 'tstorm';
            case 'mist':
                return 'fog';


            case 'scattered clouds':

            default:
                return 'dunno';
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('icon' in changes) {
            this.weatherImgSrc = `${WeatherIconComponent.BASE_PATH}/${this.imgSrc}.png`;
        }
    }

}
