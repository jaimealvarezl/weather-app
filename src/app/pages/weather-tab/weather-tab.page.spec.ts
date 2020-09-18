import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WeatherTabPage} from './weather-tab.page';
import {CurrentLocationWeatherComponent} from '../../components/current-location-weather/current-location-weather.component';
import {WeatherComponent} from '../../components/weather/weather.component';
import {WeatherIconComponent} from '../../components/weather-icon/weather-icon.component';
import {CrossPlatformHttpClientService} from '../../services/cross-platform-http-client.service';
import {HTTP} from '@ionic-native/http/ngx';

describe('WeatherTabPage', () => {
    let component: WeatherTabPage;
    let fixture: ComponentFixture<WeatherTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherTabPage,
                CurrentLocationWeatherComponent,
                WeatherComponent,
                WeatherIconComponent,
                WeatherIconComponent],
            imports: [IonicModule.forRoot()],
            providers: [CrossPlatformHttpClientService, HTTP]
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
