import {TestBed} from '@angular/core/testing';

import {CrossPlatformHttpClientService} from './cross-platform-http-client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HTTP} from '@ionic-native/http/ngx';

describe('CrossPlatformHttpClientService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [HTTP, ]
    }));

    it('should be created', () => {
        const service: CrossPlatformHttpClientService = TestBed.get(CrossPlatformHttpClientService);
        expect(service).toBeTruthy();
    });
});
