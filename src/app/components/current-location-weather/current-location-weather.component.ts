import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-current-location-weather',
    templateUrl: './current-location-weather.component.html',
    styleUrls: ['./current-location-weather.component.scss'],
})
export class CurrentLocationWeatherComponent implements OnInit {
    public currentPosition: Observable<Geoposition>;

    constructor(private geolocation: Geolocation) {

    }

    ngOnInit() {
        this.currentPosition = this.geolocation.watchPosition().pipe(filter((p) => !!p));
    }

}
