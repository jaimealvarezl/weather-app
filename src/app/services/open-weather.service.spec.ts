import {TestBed} from '@angular/core/testing';

import {OpenWeatherService} from './open-weather.service';

describe('OpenWeatherService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        expect(service).toBeTruthy();
    });

    it('should fetch current weather', () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        const weather = service.getWeather('');
    });

    it('should fetch forecast', () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        const forecast = service.getForecast('');
    });
});
