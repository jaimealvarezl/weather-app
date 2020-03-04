import {TestBed} from '@angular/core/testing';

import {CrossPlatformHttpClientService} from './cross-platform-http-client.service';

describe('CrossPlatformHttpClientService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CrossPlatformHttpClientService = TestBed.get(CrossPlatformHttpClientService);
        expect(service).toBeTruthy();
    });
});
