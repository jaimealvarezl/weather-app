import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {from, Observable} from 'rxjs';
import {HTTP} from '@ionic-native/http/ngx';
import {map} from 'rxjs/operators';
import {Platforms} from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class CrossPlatformHttpClientService {

    constructor(private httpClient: HttpClient,
                private http: HTTP,
                private platform: Platform) {
    }


    get<T>(
        url: string, options?: {
            headers?: HttpHeaders | {
                [header: string]: string | string[];
            };
            observe?: 'body';
            params?: HttpParams | {
                [param: string]: string | string[];
            };
            reportProgress?: boolean;
            responseType?: 'json';
            withCredentials?: boolean;
        }
    ): Observable<T> {
        const mobilePlatforms: Platforms[] = ['ios', 'android'];
        if (mobilePlatforms.some(mobilePlatform => this.platform.is(mobilePlatform)) && !this.platform.is('mobileweb')) {
            let params = null;

            if (options.params) {
                params = Object.entries(options.params).map(([key, value]) => {
                    return [key, String(value)];
                }).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            }

            return from(this.http.get(url, params, options.headers)).pipe(map(res => {
                return JSON.parse(res.data);
            }));
        }

        return this.httpClient.get<T>(url, options);

    }
}
