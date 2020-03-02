import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WeatherTabPage} from './weather-tab.page';
import {WeatherComponent} from '../../components/weather/weather.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [WeatherTabPage, WeatherComponent]
})
export class WeatherTabPageModule {
}
