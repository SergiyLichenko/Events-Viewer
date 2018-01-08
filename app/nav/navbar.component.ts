import { Component } from "@angular/core";
import { AuthService } from "../user/shared/auth.service";


@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavBarComponent{
    
    constructor(private _authService: AuthService){}

}