import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../../index';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
    public newSessionForm: FormGroup;
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;
    @Output() public onSaveSession: EventEmitter<ISession> = new EventEmitter<ISession>();
    @Output() public onCancelSession: EventEmitter<boolean> = new EventEmitter();

    public ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWords(['john', 'doe'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    public saveSession(sessionForm) {
        const session: ISession = {
            abstract: sessionForm.abstract,
            duration: +sessionForm.duration,
            level: sessionForm.level,
            name: sessionForm.name,
            presenter: sessionForm.presenter,
            voters: [],
            id: undefined,
        };
        this.onSaveSession.emit(session);
    }

    public cancelSession() {
        this.onCancelSession.emit(true);
    }
}
