import { Injectable } from "@angular/core";
import { ISession } from "../../../index";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class VoterService {

    constructor(private http: Http) {
    }

    private onError(error: Response) {
        return Observable.throw(error.statusText);
    }

    deleteVoter(session: ISession, username: string, eventId: number): void {
        session.voters = session.voters.filter(x => x !== username);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;

        this.http.delete(url).catch(this.onError)
            .subscribe();
    }

    addVoter(session: ISession, username: string, eventId: number): void {
        session.voters.push(username);
        
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        const options = new RequestOptions({
            headers: headers
        });
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;

        this.http.post(url, JSON.stringify({}), options)
            .catch(this.onError)
            .subscribe();
    }

    userHasVoted(session: ISession, username: string): boolean {
        if (!session.voters) return false;
        return session.voters.some(x => x === username);
    }
}