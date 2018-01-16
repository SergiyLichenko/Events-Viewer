import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: "app/events/create-event/create-event.component.html",
    styleUrls: ["app/events/create-event/create-event.component.css"]
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private _router: Router,
        private _eventService: EventService) { }

    cancelClick(): void {
        this._router.navigate(["/events"]);
    }

    saveEvent(createForm) {
        this._eventService.saveEvent(createForm);
        this.isDirty = false;
        this._router.navigate(["/events"]);
    }
}