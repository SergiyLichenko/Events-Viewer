import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEvent, ISession } from '../index';

@Injectable()
export class EventService {

    private serverUrl: string = 'http://localhost:4201';

    constructor(private http: Http) {
    }

    private onError(error: Response) {
        return Observable.throw(error.statusText);
    }

    public getEvents(): Observable<IEvent[]> {
        return this.http.get(this.serverUrl + '/api/events')
            .map((x: Response) => x.json() as IEvent[])
            .catch(this.onError);
    }

    public getEvent(id: number): Observable<IEvent> {
        return this.http.get(this.serverUrl + '/api/events/' + id)
            .map((x: Response) => x.json() as IEvent)
            .catch(this.onError);
    }

    public saveEvent(event) {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        const request = new RequestOptions({
            headers,
        });

        return this.http.post(this.serverUrl + '/api/events', event, request)
            .map((x: Response) => x.json())
            .catch(this.onError);
    }

    public searchSessions(searchTerm: string) {
        return this.http.get(this.serverUrl + '/api/sessions/search?search=' + searchTerm)
            .map((x: Response) => x.json())
            .catch(this.onError);
    }
}