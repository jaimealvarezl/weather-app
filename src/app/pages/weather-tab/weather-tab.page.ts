import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';

@Component({
    selector: 'app-weather-tab',
    templateUrl: './weather-tab.page.html',
    styleUrls: ['./weather-tab.page.scss'],
})
export class WeatherTabPage implements OnChanges {
    public geolocation = 'Managua';

    constructor(private openWeatherService: OpenWeatherService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }


}
