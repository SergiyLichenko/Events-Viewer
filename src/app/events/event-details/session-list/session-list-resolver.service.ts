import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ISession, IEvent } from '../../index';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SessionListResolverService implements Resolve<ISession[]> {
    constructor(private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISession[]> {
        const event = <IEvent>route.parent.data['event'];
        if (!event) this.router.navigate(['/error']);

        return Observable.of(event.sessions);
    }
}