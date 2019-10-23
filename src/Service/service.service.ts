import { Proposal } from './../app/model/Proposal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8082/';
  proposals: any[] = [];
  editMode = false;
  proposal = new Object();


  public add(proposal: any): Observable<any> {
    return this.http.post(this.url + '/proposals', proposal);
  }

  public update(proposal: any): Observable<any> {
    return this.http.put(this.url + '/update', proposal, { observe: 'response' });
  }

  public findAll1(): Observable<any> {
    return this.http.get<any>(this.url + '/proposals');
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }
  public getOne(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/get/' + id);
  }
}
