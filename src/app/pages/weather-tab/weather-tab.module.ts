import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WeatherTabPageRoutingModule} from './weather-tab-routing.module';

import {WeatherTabPage} from './weather-tab.page';
import {WeatherComponent} from '../../components/weather/weather.component';
import {WeatherIconComponent} from '../../components/weather-icon/weather-icon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeatherTabPageRoutingModule
    ],
    declarations: [WeatherTabPage, WeatherComponent, WeatherIconComponent]
})
export class WeatherTabPageModule {
}
