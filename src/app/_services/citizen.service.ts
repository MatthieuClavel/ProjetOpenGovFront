import { SharedService } from './shared.service';
import { Citizen } from '../_model/Citizen';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CitizenService {

    constructor(private http: HttpClient, private sharedService: SharedService) {}

    getOne(id: number) {
        return this.http.get<Citizen[]>(`${this.sharedService.apiUrl}/citizens/findOne/${id}`);
    }

    getAll() {
        return this.http.get<any>(`${this.sharedService.apiUrl}/citizens/findAll`);
    }

    save(citizen: Citizen) {
        return this.http.post(`${this.sharedService.apiUrl}/citizens/add`, citizen);
    }

    update(citizen: Citizen) {
        return this.http.put(`${this.sharedService.apiUrl}/citizens/${citizen.citizenId}`, citizen);
    }

    delete(id: number) {
        return this.http.delete(`${this.sharedService.apiUrl}/citizens/${id}`);
    }
}
