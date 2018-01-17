import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../index";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean = false;

    constructor(private _eventService: EventService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: string = this._activatedRoute.snapshot.params['id'];
        this.event = this._eventService.getEvent(+id);
    }

    addSession(): void {
        this.addMode = !this.addMode;
    }

    onSaveSession(session: ISession): void {
        const nextId = 1 + Math.max.apply(null, this.event.sessions.map(x => x.id));
        session.id = nextId;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);

        this.addMode = false;
    }

    onCancelSession(result:boolean){
        this.addMode = false;
    }
}