import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CurrentLocationForecastComponent} from './current-location-forecast.component';

describe('CurrentLocationForecastComponent', () => {
    let component: CurrentLocationForecastComponent;
    let fixture: ComponentFixture<CurrentLocationForecastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentLocationForecastComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CurrentLocationForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
