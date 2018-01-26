import { Component, OnInit } from '@angular/core';
import { EventService, ISession, IEvent } from '../events/index';
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent implements OnInit {

    public searchTerm: string = '';
    public foundSessions: ISession[];
    public events: IEvent[];

    constructor(public authService: AuthService,
        private eventService: EventService) { }

    public searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm)
            .subscribe((sessions) => {
                this.foundSessions = sessions;
            });
    }

    public ngOnInit(): void {
        this.eventService.getEvents().subscribe(x => {
            this.events = x;
        });
    }
}
