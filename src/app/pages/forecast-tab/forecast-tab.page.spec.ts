import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ForecastTabPage} from './forecast-tab.page';
import {CurrentLocationForecastComponent} from '../../components/current-location-forecast/current-location-forecast.component';
import {CrossPlatformHttpClientService} from '../../services/cross-platform-http-client.service';
import {HTTP} from '@ionic-native/http/ngx';
import {ForecastComponent} from '../../components/forecast/forecast.component';
import {ForecastItemComponent} from '../../components/forecast-item/forecast-item.component';
import {WeatherIconComponent} from '../../components/weather-icon/weather-icon.component';

describe('ForecastTabPage', () => {
    let component: ForecastTabPage;
    let fixture: ComponentFixture<ForecastTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastTabPage,
                CurrentLocationForecastComponent,
                ForecastComponent,
                ForecastItemComponent,
                WeatherIconComponent
            ],
            imports: [IonicModule.forRoot()],
            providers: [CrossPlatformHttpClientService, HTTP]
        }).compileComponents();

        fixture = TestBed.createComponent(ForecastTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
