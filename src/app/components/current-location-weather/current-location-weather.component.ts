import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {GeolocationService} from '../../services/geolocation.service';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-current-location-weather',
    templateUrl: './current-location-weather.component.html',
    styleUrls: ['./current-location-weather.component.scss'],
})
export class CurrentLocationWeatherComponent implements OnInit {
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
