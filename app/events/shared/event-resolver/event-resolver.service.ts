import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../../index";
import { IEvent } from "../index";


@Injectable()
export class EventResolver implements Resolve<any>{

    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvent(+route.params['id']);
    }
}