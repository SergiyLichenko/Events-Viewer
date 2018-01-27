import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService,
        private router: Router) {
    }

    private onError() {
        this.router.navigate(['/error']);
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const eventId = +route.params['eventId'];

        if (eventId <= 0) this.onError();
        return this.eventService.getEvent(eventId).catch(error => {
            this.onError();
            return Observable.of(error);
        });
    }
}
