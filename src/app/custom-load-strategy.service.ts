import { PreloadingStrategy, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CustomLoadStrategyService implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload'])
            return fn();
        return Observable.of(null);
    }
}