import { Proposal } from './../app/model/Proposal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Citizen } from 'src/app/_model/Citizen';
import { AuthenticationService } from 'src/app/_services/authentication.service';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }
  url = 'http://localhost:8082/';
  proposals: Proposal[] = [];
  editMode = false;
  proposal: Proposal = new Proposal();


  public add(proposal: Proposal): Observable<any> {
    proposal.creatorProposal = this.authenticationService.currentUserValue;
    return this.http.post(this.url + 'proposals/add', proposal);
  }

  public update(proposal: any): Observable<any> {
    return this.http.put(this.url + 'proposals/' + proposal.proposalId, proposal, { observe: 'response' });
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.url + 'proposals/');
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(this.url + 'proposals/' + id);
  }
  public getOne(id: any): Observable<any> {
    return this.http.get<any>(this.url + 'proposals/' + id);
  }

  public getCreator(id: any): Observable<Citizen> {
    return this.http.get<any>(this.url + 'proposals/' + id + '/creatorProposal');
  }
}
