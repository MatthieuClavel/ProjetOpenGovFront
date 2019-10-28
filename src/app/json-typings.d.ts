import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as data from './data.json';

@Injectable({
 providedIn: 'root'
})
export class DataService {


}





declare module "*.json" {
    const value: any;
    export default value;
    }