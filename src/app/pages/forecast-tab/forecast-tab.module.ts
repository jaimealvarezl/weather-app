import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForecastTabPage} from './forecast-tab.page';
import {ForecastComponent} from '../../components/forecast/forecast.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [ForecastTabPage, ForecastComponent]
})
export class ForecastTabPageModule {
}
