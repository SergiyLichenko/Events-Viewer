import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../index";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean = false;
    filterBy: string = "all";
    sortBy: string = "name";

    constructor(private eventService: EventService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });
    }

    addSession(): void {
        this.addMode = !this.addMode;
    }

    onSaveSession(session: ISession): void {
        const nextId = 1 + Math.max.apply(null, this.event.sessions.map(x => x.id));
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);

        this.addMode = false;
    }

    onCancelSession(result: boolean) {
        this.addMode = false;
    }
}