import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnChanges {

    @Input()
    private location: string;

    constructor(private openWeatherService: OpenWeatherService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('location' in changes) {
            this.openWeatherService.getForecast(this.location).subscribe(result => {
                console.log({result});
            });
        }
    }
}
