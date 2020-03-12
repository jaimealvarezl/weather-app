import {TestBed} from '@angular/core/testing';

import {OpenWeatherService} from './open-weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CrossPlatformHttpClientService} from './cross-platform-http-client.service';
import {HTTP} from '@ionic-native/http/ngx';

describe('OpenWeatherService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CrossPlatformHttpClientService, HTTP]
    }));

    it('should be created', () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        expect(service).toBeTruthy();
    });

    it('should fetch current weather', async () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        const weather = service.getWeather({latitude: 11, longitude: 20} as Coordinates);
        await expect(weather).toBeTruthy();
    });

    it('should fetch forecast', async () => {
        const service: OpenWeatherService = TestBed.get(OpenWeatherService);
        const forecast = service.getWeather({latitude: 11, longitude: 20} as Coordinates);
        await expect(forecast).toBeTruthy();
    });
});
