import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetOpenGov';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  deco() {
    this.authenticationService.logout();
    this.router.navigate(['/accueil']);
  }

  goToLog() {
    this.router.navigate(['/authentification/login']);
  }
}
