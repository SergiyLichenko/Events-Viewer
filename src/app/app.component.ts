import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/shared/auth.service';

@Component({
    selector: 'events-app',
    templateUrl: './app.component.html'
})
export class EventsAppComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    public ngOnInit(): void {
        this.authService.checkAuthentication().subscribe();
    }
}
