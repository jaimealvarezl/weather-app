import {Component, Input, OnInit} from '@angular/core';
import {ForecastItem} from '../../types/forecast-item.type';

@Component({
    selector: 'app-forecast-item',
    templateUrl: './forecast-item.component.html',
    styleUrls: ['./forecast-item.component.scss'],
})
export class ForecastItemComponent implements OnInit {

    @Input()
    public forecast: ForecastItem;

    constructor() {
    }

    ngOnInit() {
    }

}
