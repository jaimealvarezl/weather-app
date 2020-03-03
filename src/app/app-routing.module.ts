import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'forecast-tab',
        loadChildren: () => import('./pages/forecast-tab/forecast-tab.module').then(m => m.ForecastTabPageModule)
    },
    {
        path: 'weather-tab',
        loadChildren: () => import('./pages/weather-tab/weather-tab.module').then(m => m.WeatherTabPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
