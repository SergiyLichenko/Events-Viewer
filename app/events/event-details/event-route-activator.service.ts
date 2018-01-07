import { CanActivate } from "@angular/router/src/interfaces";

import { ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";
import { Injectable, Inject } from "@angular/core";


@Injectable()
export class EventRouteActivatorGuard implements CanActivate {

    constructor(private _eventService: EventService,
        private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this._eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this._router.navigate(["/404"]);

        return eventExists;
    }
}