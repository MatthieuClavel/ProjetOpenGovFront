import { first } from 'rxjs/operators';
import { CitizenService } from './../_services/citizen.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Citizen } from './../_model/Citizen';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  currentUser: Citizen;
  citizens = [];

  constructor(private authenticationService: AuthenticationService,
              private citizenService: CitizenService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllCitizens();
  }

  deleteCitizen(id: number) {
    this.citizenService.delete(id)
    .pipe(first())
    .subscribe(() => this.loadAllCitizens());
  }

  private loadAllCitizens() {
    this.citizenService.getAll()
    .pipe(first())
    .subscribe(citizens => { this.citizens = citizens._embedded.citizens; } );
  }

}
