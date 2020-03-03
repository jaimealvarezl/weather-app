import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForecastTabPage } from './forecast-tab.page';

describe('ForecastTabPage', () => {
  let component: ForecastTabPage;
  let fixture: ComponentFixture<ForecastTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastTabPage ],
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
