import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    currentUser: IUser;
    private headers = new Headers({
        "Content-Type": "application/json"
    });
    private options = new RequestOptions({
        headers: this.headers
    });

    constructor(private http: Http) {
    }

    loginUser(userName: string, password: string) {

        const loginInfo = {
            username: userName,
            password: password
        }

        return this.http.post("/api/login", loginInfo, this.options)
            .do((x) => {
                if (x)
                    this.currentUser = <IUser>x.json().user;
            }).catch(error => Observable.of(false));
    }

    logoutUser() {
        return this.http.post("/api/logout", {}, this.options).do(x => {
            this.currentUser = undefined;
        });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        return this.http.put(`/api/users/${this.currentUser.id}`,
            this.currentUser, this.options);
    }

    checkAuthentication() {
        return this.http.get("/api/currentIdentity")
            .map((x: any) => x._body ? x.json() : {})
            .do(x => {
                if (x.userName)
                    this.currentUser = x;
            })
    }
}