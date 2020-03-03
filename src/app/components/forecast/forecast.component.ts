import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {LoadingController} from '@ionic/angular';
import {Forecast} from '../../types/forecast.type';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnChanges {

    @Input()
    private location: string;
    private forecast?: Forecast = null;

    constructor(private openWeatherService: OpenWeatherService, private loadingController: LoadingController) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('location' in changes) {
            this.fetchForecast();
        }
    }

    private async fetchForecast() {
        const loadingIndicator = await this.loadingController.create({message: 'Please wait...'});
        await loadingIndicator.present();
        this.openWeatherService.getForecast(this.location).subscribe({
            next: (forecast) => {
                this.forecast = forecast;
            },
            complete: () => {
                loadingIndicator.dismiss();
            },
            error: err => {
                this.forecast = null;
            }
        });
    }
}
