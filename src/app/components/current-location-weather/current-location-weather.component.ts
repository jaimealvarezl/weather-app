import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';

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
        this.currentPosition = from(this.geolocation.getCurrentPosition());
    }

}
