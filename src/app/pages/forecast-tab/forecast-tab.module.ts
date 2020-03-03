import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForecastTabPageRoutingModule} from './forecast-tab-routing.module';

import {ForecastTabPage} from './forecast-tab.page';
import {ForecastComponent} from '../../components/forecast/forecast.component';
import {WeatherTabPageModule} from '../weather-tab/weather-tab.module';
import {ForecastItemComponent} from '../../components/forecast-item/forecast-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForecastTabPageRoutingModule,
        WeatherTabPageModule
    ],
    declarations: [ForecastTabPage, ForecastComponent, ForecastItemComponent]
})
export class ForecastTabPageModule {
}
