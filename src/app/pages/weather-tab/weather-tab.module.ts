import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WeatherTabPageRoutingModule} from './weather-tab-routing.module';

import {WeatherTabPage} from './weather-tab.page';
import {WeatherComponent} from '../../components/weather/weather.component';
import {WeatherIconComponent} from '../../components/weather-icon/weather-icon.component';
import {CurrentLocationWeatherComponent} from '../../components/current-location-weather/current-location-weather.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeatherTabPageRoutingModule
    ],
    exports: [
        WeatherIconComponent
    ],
    declarations: [WeatherTabPage, WeatherComponent, WeatherIconComponent, CurrentLocationWeatherComponent]
})
export class WeatherTabPageModule {
}
