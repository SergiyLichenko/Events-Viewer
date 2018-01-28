import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleWellComponent } from '../../../common/collapsible-well/collapsible-well.component';
import { AuthService } from '../../../user/shared/auth.service';
import { DurationPipe, ISession, VoterService, UpvoteComponent } from '../../index';
import { SessionListComponent } from './session-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let nativeElement: HTMLElement;
    let debugElement: DebugElement;
    let mockActivatedRoute;

    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Sergiy', },
        };
        const mockVoterService = {
            userHasVoted(session: ISession, userName: string): boolean { return true; },
        };

        const data = {
            sessions: [{
                id: 3,
                name: 'Sergiy\'s session',
                presenter: 'Sergiy Lichenko',
                duration: 1,
                level: 'advanced',
                abstract: 'abstract',
                voters: ['John', 'Sergiy'],
            }]
        };

        mockActivatedRoute = { snapshot: { queryParams: {} } };
        mockActivatedRoute.parent = { snapshot: { params: {} } };
        mockActivatedRoute.data = Observable.of(data);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ],
            declarations: [SessionListComponent,
                CollapsibleWellComponent,
                UpvoteComponent,
                DurationPipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        nativeElement = fixture.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {
            //arrange
            component.filterBy = 'all';
            component.eventId = 4;

            //act
            fixture.detectChanges();

            //assert
            let element = nativeElement.querySelector('[well-title]');
            expect(nativeElement.querySelector('[well-title]').textContent)
                .toContain('Sergiy\'s session');
        });
    });
});
