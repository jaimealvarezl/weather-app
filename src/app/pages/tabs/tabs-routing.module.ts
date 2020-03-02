import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'weather',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../weather-tab/weather-tab.module').then(m => m.WeatherTabPageModule)
                    }
                ]
            },
            {
                path: 'forecast',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../forecast-tab/forecast-tab.module').then(m => m.ForecastTabPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/weather',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/weather',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
