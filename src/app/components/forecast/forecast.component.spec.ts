import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ForecastComponent} from './forecast.component';
import {ForecastItemComponent} from '../forecast-item/forecast-item.component';
import {CrossPlatformHttpClientService} from '../../services/cross-platform-http-client.service';
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClientModule} from '@angular/common/http';
import {WeatherIconComponent} from '../weather-icon/weather-icon.component';

describe('ForecastComponent', () => {
    let component: ForecastComponent;
    let fixture: ComponentFixture<ForecastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastComponent, ForecastItemComponent, WeatherIconComponent],
            imports: [IonicModule.forRoot(), HttpClientModule],
            providers: [CrossPlatformHttpClientService, HTTP]
        }).compileComponents();

        fixture = TestBed.createComponent(ForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
