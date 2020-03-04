import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {LoadingController} from '@ionic/angular';
import {Forecast} from '../../types/forecast.type';
import {Geoposition} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnChanges {

    @Input()
    private location: string | Geoposition;
    private forecast?: Forecast = null;

    constructor(private openWeatherService: OpenWeatherService, private loadingController: LoadingController) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('location' in changes && changes.location.currentValue) {
            this.fetchForecast(changes.location.currentValue);
        }
    }


    private async fetchForecast(location: Geoposition | string) {
        const loadingIndicator = await this.loadingController.create({message: 'Please wait...'});
        await loadingIndicator.present();


        this.openWeatherService.getForecast(location).subscribe({
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
