import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: "app/events/create-event/create-event.component.html",
    styleUrls: ["app/events/create-event/create-event.component.css"]
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router,
        private eventService: EventService) { }

    cancelClick(): void {
        this.router.navigate(["/events"]);
    }

    saveEvent(createForm) {
        this.eventService.saveEvent(createForm);
        this.isDirty = false;
        this.router.navigate(["/events"]);
    }
}