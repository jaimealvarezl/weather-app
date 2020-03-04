import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ForecastTabPage} from './forecast-tab.page';
import {CurrentLocationForecastComponent} from '../../components/current-location-forecast/current-location-forecast.component';

describe('ForecastTabPage', () => {
    let component: ForecastTabPage;
    let fixture: ComponentFixture<ForecastTabPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastTabPage, CurrentLocationForecastComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ForecastTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
