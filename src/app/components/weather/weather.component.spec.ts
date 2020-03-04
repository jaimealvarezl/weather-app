import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WeatherComponent} from './weather.component';
import {Component} from '@angular/core';
import {WeatherIconComponent} from '../weather-icon/weather-icon.component';
import {Geoposition} from '@ionic-native/geolocation';

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherComponent, TestHostComponent, WeatherIconComponent],
            imports: [IonicModule.forRoot()]
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

    location: Geoposition = {coords: {latitude: -11, longitude: 11}} as Geoposition;
}

