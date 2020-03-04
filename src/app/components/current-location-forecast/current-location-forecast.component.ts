import {Component, OnInit} from '@angular/core';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {from, Observable} from 'rxjs';

@Component({
    selector: 'app-current-location-forecast',
    templateUrl: './current-location-forecast.component.html',
    styleUrls: ['./current-location-forecast.component.scss'],
})
export class CurrentLocationForecastComponent implements OnInit {
    public currentPosition: Observable<Geoposition>;

    constructor(private geolocation: Geolocation) {
    }

    ngOnInit() {
        this.currentPosition = from(this.geolocation.getCurrentPosition());
    }

}
