import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    constructor() {}

    private request<T>(method, url: string, data: any, options) {
        switch (method) {
            case 'get':
            case 'delete':
            case 'post':
            case 'put':
            default:
        }
        return;
    }
}
