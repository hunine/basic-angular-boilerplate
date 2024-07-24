import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestOption } from '../interfaces/api.interface';
import { map, Observable } from 'rxjs';
import { API_REQUEST_OPTION_DEFAULT } from '../constants/api.constant';

@Injectable()
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    public get<T>(url: string, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('get', url, null, options);
    }

    public post<T>(url: string, data: any, options: ApiRequestOption = API_REQUEST_OPTION_DEFAULT): Observable<T> {
        return this.request<T>('post', url, data, options);
    }

    private request<T>(
        method: 'get' | 'post' | 'delete' | 'put',
        url: string,
        data: any,
        options: ApiRequestOption,
    ): Observable<T> {
        // const headers = new HttpHeaders(options.headers);
        const headers = {};

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
                observable = this.httpClient[method]<T>(url, {
                    headers,
                    observe: 'response',
                    responseType: 'json',
                    ...options,
                });
                break;
            case 'post':
            case 'put':
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }

        return observable.pipe(map((response) => response.body as T));
    }
}
