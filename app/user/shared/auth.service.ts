import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    public currentUser: IUser;
    private headers = new Headers({
        'Content-Type': 'application/json',
    });
    private options = new RequestOptions({
        headers: this.headers,
    });

    constructor(private http: Http) {
    }

    public loginUser(userName: string, password: string) {

        const loginInfo = {
            username: userName,
            password,
        };

        return this.http.post('/api/login', loginInfo, this.options)
            .do((x) => {
                if (x)
                    this.currentUser = x.json().user as IUser;
            }).catch((error) => Observable.of(false));
    }

    public logoutUser() {
        return this.http.post('/api/logout', {}, this.options).do((x) => {
            this.currentUser = undefined;
        });
    }

    public isAuthenticated() {
        return !!this.currentUser;
    }

    public updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        return this.http.put(`/api/users/${this.currentUser.id}`,
            this.currentUser, this.options);
    }

    public checkAuthentication() {
        return this.http.get('/api/currentIdentity')
            .map((x: any) => x._body ? x.json() : {})
            .do((x) => {
                if (x.userName)
                    this.currentUser = x;
            });
    }
}
