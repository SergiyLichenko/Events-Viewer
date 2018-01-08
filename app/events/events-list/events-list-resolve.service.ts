import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from "../shared/event.service";
import 'rxjs/Rx';

@Injectable()
export class EventsListResolveService implements Resolve<any>{
   
    constructor(private _eventService: EventService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._eventService.getEvents();
    }
}