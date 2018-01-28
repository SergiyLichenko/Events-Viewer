import { Component, OnInit } from '@angular/core';
import { ISession } from '../../../shared/session.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './session-details.component.html'
})
export class SessionDetailsComponent implements OnInit {
    public session: ISession;
    public eventId: number;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.data.subscribe(x => {
            this.session = x['session'];
        });
    }

    ngOnInit(): void {
        this.activatedRoute.parent.params.subscribe(params => {
            this.eventId = +params['eventId'];
        });
    }

    onViewAllClick(): void {
        this.router.navigate(['/events', this.eventId, 'sessions', 'list'], {
            queryParamsHandling: 'preserve'
        });
    }
}