import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css']
})
export class LoginComponent {

    constructor(private _authService: AuthService,
        private _router: Router) { }

    login(formValues) {
        this._authService.loginUser(
            formValues.userName,
            formValues.password);
        this._router.navigate(["/events"]);
    }

    cancel(){
        this._router.navigate(["/events"]);
    }
}