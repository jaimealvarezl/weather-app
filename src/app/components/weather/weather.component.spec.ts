import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WeatherComponent} from './weather.component';
import {Component} from '@angular/core';
import {WeatherIconComponent} from '../weather-icon/weather-icon.component';
import {CrossPlatformHttpClientService} from '../../services/cross-platform-http-client.service';
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherComponent, TestHostComponent, WeatherIconComponent],
            imports: [IonicModule.forRoot(), HttpClientModule],
            providers: [CrossPlatformHttpClientService, HTTP]
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({
    selector: `host-component`,
    template: `
        <app-weather [location]="location"></app-weather>
    `
})
class TestHostComponent {

    location: Coordinates = {latitude: -11, longitude: 11} as Coordinates;
}

