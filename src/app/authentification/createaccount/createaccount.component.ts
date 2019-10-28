import { CitizenService } from './../../_services/citizen.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/_model/Citizen';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private citizenService: CitizenService
  ) {
    // redirect to enterAccount if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/accueil']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loginError = false;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.citizenService.save(this.registerForm.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.authenticationService.login(this.registerForm.value.login, this.registerForm.value.password);
        this.router.navigate(['/authentification/accueil']);
      },
    error => {
      console.log(error);
      this.loading = false;
      this.loginError = true;
    });
  }
}
