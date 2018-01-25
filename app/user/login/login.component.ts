import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css'],
})
export class LoginComponent {
    public invalidLogin = false;

    constructor(private authService: AuthService,
                private router: Router) { }

    public login(formValues) {
        this.authService.loginUser(
            formValues.userName,
            formValues.password).subscribe((x) => {
                if (x) {
                    this.invalidLogin = false;
                    this.router.navigate(['/events']);
                }
                else
                    this.invalidLogin = true;
            });
    }

    public cancel() {
        this.router.navigate(['/events']);
    }
}
