import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentPage;
  title = 'ProjetOpenGov';
  connected = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPage = location.pathname.split('/')[1];
    this.connected = !(this.authenticationService.currentUserValue === null);
  }

  deco() {
    this.authenticationService.logout();
    location.reload(true);
  }
}




