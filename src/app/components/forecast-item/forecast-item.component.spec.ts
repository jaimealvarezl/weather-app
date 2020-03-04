import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ForecastItemComponent} from './forecast-item.component';
import {WeatherIconComponent} from '../weather-icon/weather-icon.component';
import {Component} from '@angular/core';
import {ForecastItem} from '../../types/forecast-item.type';

describe('ForecastItemComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastItemComponent, WeatherIconComponent, TestHostComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
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
        <app-forecast-item [forecast]="forecastItem"></app-forecast-item>
    `
})
class TestHostComponent {

    forecastItem: ForecastItem = {
        dt_txt: '2012',
        weather: [
            {main: 'Clouds', icon: '01d', description: 'Cloudy', id: 1}
        ],
        dt: 1111111,
        main: {
            feels_like: 12,
            humidity: 23,
            pressure: 34,
            temp: 23,
            temp_min: 12,
            temp_max: 13
        }
    };
}
