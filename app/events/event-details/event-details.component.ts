import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../index";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private _eventService: EventService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: string = this._activatedRoute.snapshot.params['id'];
        this.event = this._eventService.getEvent(+id);
    }
}