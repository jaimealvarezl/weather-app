import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {GeolocationService} from '../../services/geolocation.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-current-location-forecast',
    templateUrl: './current-location-forecast.component.html',
    styleUrls: ['./current-location-forecast.component.scss'],
})
export class CurrentLocationForecastComponent implements OnInit {
    public currentPosition: Observable<Coordinates>;

    constructor(private geolocation: GeolocationService) {
    }

    ngOnInit() {
        this.currentPosition = from(this.geolocation.getCurrentPosition()).pipe(
            map(position => ({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            } as Coordinates)),
        );
    }

}
