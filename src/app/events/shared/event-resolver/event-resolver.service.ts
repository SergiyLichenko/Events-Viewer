import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../../index';
import { IEvent } from '../index';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvent(+route.params['id']);
    }
}
