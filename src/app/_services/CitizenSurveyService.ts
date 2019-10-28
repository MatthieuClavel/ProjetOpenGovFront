import { SharedService } from './shared.service';
import { Citizen } from '../_model/Citizen';
import { AuthenticationService } from './authentication.service';
import { Citizen_SurveyFull } from '../_model/Citizen_SurveyFull';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CitizenSurveyService {

  constructor(
      private http: HttpClient,
      private authenticationService: AuthenticationService,
      private sharedService: SharedService
      ) { }

  citizenSurvey: Citizen_SurveyFull;

  public save(citizenSurvey: Citizen_SurveyFull): Observable<any> {
    citizenSurvey.citizen = this.authenticationService.currentUserValue;
    return this.http.post(`${this.sharedService.apiUrl}/citizenSurveys/add`, citizenSurvey);
  }

}
