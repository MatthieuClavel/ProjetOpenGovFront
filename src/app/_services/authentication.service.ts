import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Citizen } from '../_model/Citizen';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Citizen>;
    public currentUser: Observable<Citizen>;

    constructor(private http: HttpClient, private sharedService: SharedService) {
        this.currentUserSubject = new BehaviorSubject<Citizen>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Citizen {
        return this.currentUserSubject.value;
    }

    login(login, password) {
        return this.http.post<any>(`${this.sharedService.apiUrl}/citizens`, {login, password})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
        }));
    }

    logout() {
        // remove user form local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
