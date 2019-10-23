import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authentificationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authentificationService.currentUserValue;
        if (currentUser) {
            // autorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authentification']);
        return false;
    }
}
