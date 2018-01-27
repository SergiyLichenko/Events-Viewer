import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ISession } from '../../../index';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class VoterService {

    private serverUrl: string = environment.serverUrl;

    constructor(private http: Http) {
    }

    private onError(error: Response) {
        return Observable.throw(error.statusText);
    }

    public deleteVoter(session: ISession, username: string, eventId: number): void {
        session.voters = session.voters.filter((x) => x !== username);

        const url = this.serverUrl + `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;

        this.http.delete(url).catch(this.onError)
            .subscribe();
    }

    public addVoter(session: ISession, username: string, eventId: number): void {
        session.voters.push(username);
        
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        const options = new RequestOptions({
            headers,
        });
        const url = this.serverUrl + `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;

        this.http.post(url, JSON.stringify({}), options)
            .catch(this.onError)
            .subscribe();
    }

    public userHasVoted(session: ISession, username: string): boolean {
        if (!session.voters) { return false; }
        return session.voters.some((x) => x === username);
    }
}
