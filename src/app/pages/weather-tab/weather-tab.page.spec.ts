import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {WeatherTabPage} from './weather-tab.page';
import {CurrentLocationWeatherComponent} from '../../components/current-location-weather/current-location-weather.component';

describe('WeatherTabPage', () => {
    let component: WeatherTabPage;
    let fixture: ComponentFixture<WeatherTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherTabPage, CurrentLocationWeatherComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
