import {Injectable} from '@angular/core';
import {Geolocation, GeolocationOptions, GeolocationPosition} from '@capacitor/core';
import {GeolocationWatchCallback} from '@capacitor/core/dist/esm/core-plugin-definitions';


@Injectable({
    providedIn: 'root'
})
export class GeolocationService {

    getCurrentPosition(options?: GeolocationOptions): Promise<GeolocationPosition> {
        return Geolocation.getCurrentPosition(options);
    }

    watchPosition(options: GeolocationOptions, callback: GeolocationWatchCallback) {
        return Geolocation.watchPosition(options, callback);
    }
}
