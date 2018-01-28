import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../shared/session.model';
import { restrictedWords } from '../../shared/restricted-words.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../shared/event.service';
import { IEvent } from '../../shared/event.model';

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

    private event: IEvent;

    constructor(private router: Router,
        private eventService: EventService,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.parent.data.subscribe(x => {
            this.event = <IEvent>x['event'];
        });
    }

    private navigateToSessionList() {
        this.router.navigate(['/events', this.event.id]);
    }

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

        const nextId = 1 + Math.max.apply(null, this.event.sessions.map((x) => x.id));
        const session: ISession = {
            abstract: sessionForm.abstract,
            duration: +sessionForm.duration,
            level: sessionForm.level,
            name: sessionForm.name,
            presenter: sessionForm.presenter,
            voters: [],
            id: nextId,
        };

        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.navigateToSessionList();
    }

    public cancelSession() {
        this.navigateToSessionList();
    }
}
