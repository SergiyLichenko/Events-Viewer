import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../shared/event.service';
import { ISession } from '../../../shared/session.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './session-details.component.html'
})
export class SessionDetailsComponent implements OnInit {
    public session: ISession;

    constructor(private eventService: EventService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.eventService.getEvent(this.activatedRoute.snapshot.params['eventId']).subscribe(x => {
            const sessionId = this.activatedRoute.snapshot.params['sessionId'];
            this.session = x.sessions.find(x => x.id === +sessionId);
        });
    }
}