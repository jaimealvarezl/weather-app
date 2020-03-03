import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherTabPage } from './weather-tab.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherTabPageRoutingModule {}
