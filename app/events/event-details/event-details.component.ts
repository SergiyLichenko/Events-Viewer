import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    templateUrl: './app/events/event-details/event-details.component.html',
    styleUrls: ['./app/events/event-details/event-details.component.html'],
    providers: [EventService]
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private _eventService: EventService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: string = this._activatedRoute.snapshot.params['id'];
        this.event = this._eventService.getEvent(+id);
    }
}