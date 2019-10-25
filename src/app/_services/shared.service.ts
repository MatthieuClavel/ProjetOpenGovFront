import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class SharedService {

    constructor(private http: HttpClientModule) {}
    apiUrl = 'http://localhost:8082';
}
