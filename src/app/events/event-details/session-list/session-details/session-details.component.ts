import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { ISession } from '../../../shared/session.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './session-details.component.html'
})
export class SessionDetailsComponent implements OnInit {
    public session: ISession;
    public eventId: number;

    constructor(private eventService: EventService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.eventId = +params['eventId'];
            this.eventService.getEvent(this.eventId).subscribe(x => {
                const sessionId = params['sessionId'];
                this.session = x.sessions.find(x => x.id === +sessionId);
            });
        });
    }

    onBackClick(): void {
        this.router.navigate(['/events', this.eventId], {
            queryParamsHandling: 'preserve'
        });
    }
}