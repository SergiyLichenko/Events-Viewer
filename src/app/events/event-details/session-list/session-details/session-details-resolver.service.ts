import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from '../../../shared/event.service';
import { ISession } from '../../../shared/session.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SessionDetailsResolverService implements Resolve<ISession> {
    constructor(private eventService: EventService,
        private router: Router) { }

    private onError() {
        this.router.navigate(['/error']);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISession> {
        const eventId = +route.parent.params['eventId'];
        const sessionId = route.params['sessionId'];

        if (!eventId && eventId <= 0) this.onError();
        if (!sessionId && sessionId <= 0) this.onError();

        return this.eventService.getEvent(eventId).map(event => {
            if (!event) Observable.throw(event);

            const session = event.sessions.find(x => x.id === +sessionId);
            if (!session) this.onError();

            return session;
        }).catch((error) => {
            this.onError();
            return Observable.of(error);
        });
    }
}