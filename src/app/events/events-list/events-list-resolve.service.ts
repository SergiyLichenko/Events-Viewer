import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventsListResolveService implements Resolve<any> {

    constructor(private eventService: EventService) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvents();
    }
}
