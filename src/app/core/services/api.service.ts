import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_REQUEST_OPTION_DEFAULT, AUTH_STORAGE_KEY } from '../constants';
import { ApiRequestOption } from '../interfaces';
import { CookieService } from './cookie.service';

@Injectable()
export class ApiService {
    constructor(
        private httpClient: HttpClient,
        private cookieService: CookieService,
    ) {}

    public getAccessToken(): string {
        return this.cookieService.get(AUTH_STORAGE_KEY.accessToken) ?? '';
    }

    public get<T>(url: string, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('get', url, null, options);
    }

    public post<T>(url: string, data: any, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('post', url, data, options);
    }

    public putt<T>(url: string, data: any, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('put', url, data, options);
    }

    public delete<T>(url: string, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('delete', url, null, options);
    }

    private request<T>(
        method: 'get' | 'post' | 'delete' | 'put',
        url: string,
        data: any,
        apiRequestOptions: ApiRequestOption,
    ): Observable<T> {
        const options = {
            ...API_REQUEST_OPTION_DEFAULT,
            ...apiRequestOptions,
        };
        const headers = this.getHeader(options);

        let observable: Observable<HttpResponse<T>>;

        switch (method) {
            case 'get':
                observable = this.httpClient.get<T>(url, {
                    headers,
                    observe: 'response',
                    responseType: 'json',
                    ...options,
                });
                break;
            case 'delete':
                observable = this.httpClient.delete<T>(url, {
                    headers,
                    observe: 'response',
                    responseType: 'json',
                    ...options,
                });
                break;
            case 'post':
                observable = this.httpClient.post<T>(url, data, {
                    headers,
                    observe: 'response',
                    responseType: 'json',
                });
                break;
            case 'put':
                observable = this.httpClient.put<T>(url, data, {
                    headers,
                    observe: 'response',
                    responseType: 'json',
                });
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }

        return observable.pipe(map((response) => response.body as T));
    }

    private getHeader(options: ApiRequestOption) {
        const token = this.getAccessToken();

        return {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.customHeader,
        };
    }
}
