import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../../index";


@Component({
    templateUrl: "app/events/event-details/create-session/create-session.component.html",
    styleUrls: ["app/events/event-details/create-session/create-session.component.css"]
})
export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit(): void {
        this.name = new FormControl("", Validators.required);
        this.presenter = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.level = new FormControl("", Validators.required);
        this.abstract = new FormControl("", [Validators.required,
        Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(sessionForm){
        let session:ISession = {
            abstract: sessionForm.abstract,
            duration: +sessionForm.duration,
            level: sessionForm.level,
            name: sessionForm.name,
            presenter:sessionForm.presenter,
            voters: [],
            id: undefined 
        };
        console.log(session);
    }
}