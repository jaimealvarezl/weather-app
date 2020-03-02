import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-forecast-tab',
    templateUrl: './forecast-tab.page.html',
    styleUrls: ['./forecast-tab.page.scss'],
})
export class ForecastTabPage implements OnInit {

    public geolocation = 'Managua';

    constructor() {
    }

    ngOnInit() {
    }

}
