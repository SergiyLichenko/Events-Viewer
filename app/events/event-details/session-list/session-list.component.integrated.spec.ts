import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleWellComponent } from '../../../common/collapsible-well/collapsible-well.component';
import { AuthService } from '../../../user/shared/auth.service';
import { DurationPipe, ISession, UpvoteComponent, VoterService } from '../../index';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let nativeElement: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {
                userName: 'Sergiy',
            },
        };
        const mockVoterService = {
            userHasVoted(session: ISession, userName: string): boolean {
                return true;
            },
        };

        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
            ],
            declarations: [SessionListComponent,
                DurationPipe],
            schemas: [NO_ERRORS_SCHEMA],
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
            component.sessions = [{
                id: 3,
                name: 'Sergiy\'s session',
                presenter: 'Sergiy Lichenko',
                duration: 1,
                level: 'advanced',
                abstract: 'abstract',
                voters: ['John', 'Sergiy'],
            }] as ISession[];
            component.filterBy = 'all';
            component.eventId = 4;

            //act
            component.ngOnChanges();
            fixture.detectChanges();

            //assert
            expect(nativeElement.querySelector('[well-title]').textContent)
                .toContain('Sergiy\'s session');
        });
    });
});
