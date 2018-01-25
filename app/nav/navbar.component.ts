import { Component } from '@angular/core';
import { EventService, ISession } from '../events/index';
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css'],
})
export class NavBarComponent {
    public searchTerm: string = '';
    public foundSessions: ISession[];

    constructor(private authService: AuthService,
                private eventService: EventService) { }

    public searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm)
            .subscribe((sessions) => {
                this.foundSessions = sessions;
            });
    }
}
