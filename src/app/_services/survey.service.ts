import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SurveyService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8082/';
  surveys: any[] = [];
  editMode = false;
  // survey = new Object();


  public save(survey: any): Observable<any> {
    return this.http.post(this.url + 'surveys/add', survey);
  }

  public update(survey: any): Observable<any> {
    return this.http.put(this.url + 'surveys/' + survey.surveyId, survey, { observe: 'response' });
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.url + 'surveys/findAll');
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(this.url + 'surveys/' + id);
  }
  public getOne(id: any): Observable<any> {
    return this.http.get<any>(this.url + 'surveys/findOne/' + id);
  }
}
