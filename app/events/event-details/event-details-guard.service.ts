import { CanActivate } from "@angular/router/src/interfaces";

import { ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";
import { Injectable, Inject } from "@angular/core";


@Injectable()
export class EventDetailsGuard implements CanActivate {

    constructor(private eventService: EventService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this.router.navigate(["/404"]);

        return eventExists;
    }
}