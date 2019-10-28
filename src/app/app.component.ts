import { Component } from '@angular/core';
import sampleData from './data.json';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetOpenGov';
Users: any = sampleData;
  public countryList: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  deco() {
    this.authenticationService.logout();
    location.reload(true);
  }

  goToLog() {
    this.router.navigate(['/authentification/login']);
  }
}




