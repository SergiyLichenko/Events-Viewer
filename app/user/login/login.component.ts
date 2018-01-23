import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService,
        private router: Router) { }

    login(formValues) {
        this.authService.loginUser(
            formValues.userName,
            formValues.password);
        this.router.navigate(["/events"]);
    }

    cancel(){
        this.router.navigate(["/events"]);
    }
}