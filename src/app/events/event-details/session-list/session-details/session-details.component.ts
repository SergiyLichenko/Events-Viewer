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
        private activatedRoute: ActivatedRoute) {
        activatedRoute.data.subscribe(x => {
            this.session = x['session'];
        });
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.eventId = +params['eventId'];
        });
    }

    onBackClick(): void {
        this.router.navigate(['/events', this.eventId], {
            queryParamsHandling: 'preserve'
        });
    }
}