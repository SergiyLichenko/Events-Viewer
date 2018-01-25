import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../index';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
    public event: IEvent;
    public addMode: boolean = false;
    public filterBy: string = 'all';
    public sortBy: string = 'name';

    constructor(private eventService: EventService,
                private activatedRoute: ActivatedRoute) { }

    public ngOnInit() {
        this.activatedRoute.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    public addSession(): void {
        this.addMode = !this.addMode;
    }

    public onSaveSession(session: ISession): void {
        const nextId = 1 + Math.max.apply(null, this.event.sessions.map((x) => x.id));
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe((x) => {
            this.addMode = false;
        });
    }

    public onCancelSession(result: boolean) {
        this.addMode = false;
    }
}
