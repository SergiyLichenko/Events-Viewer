import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Injectable()
export class ProfileGuardService implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.currentUser)
            return true;

        this.router.navigate(['/user', 'login']);
        return false;
    }
}