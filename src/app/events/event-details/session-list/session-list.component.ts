import { Component } from '@angular/core';
import { AuthService } from '../../../user/shared/auth.service';
import { ISession } from '../../index';
import { VoterService } from './upvote/voter.service';
import { SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationCancel, NavigationError, ResolveEnd, ActivationEnd } from '@angular/router';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})
export class SessionListComponent {
    public sessions: ISession[];
    public filterBy: string;
    public sortBy: string;
    public eventId: number;
    public visibleSessions: ISession[] = [];
    public loading: boolean = false;

    constructor(private voterService: VoterService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {
        this.eventId = activatedRoute.parent.snapshot.params['eventId'];

        let sortBy = activatedRoute.snapshot.queryParams['sortBy'];
        if (!sortBy) sortBy = 'name';
        this.sortBy = sortBy;

        let filterBy = activatedRoute.snapshot.queryParams['filterBy'];
        if (!filterBy) filterBy = 'all';
        this.filterBy = filterBy;

        activatedRoute.data.subscribe(x => {
            this.sessions = <ISession[]>x['sessions'];
            this.onChange(filterBy, sortBy);
        });

        router.events.subscribe(this.handleRouterEvent.bind(this));
    }

    private handleRouterEvent(event: Event) {
        if (event instanceof NavigationStart)
            this.loading = true;
        if (event instanceof ResolveEnd ||
            event instanceof ActivationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError)
            this.loading = false;
    }

    public onChange(filter: string, sort: string): void {
        this.filterBy = filter;
        this.sortBy = sort;
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) :
                this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    public filterSessions(filter: string): any {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter((session) => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

    public sortByNameAsc(first: ISession, second: ISession) {
        if (first.name > second.name) return 1;
        if (first.name === second.name) return 0;
        return -1;
    }

    public sortByVotesDesc(first: ISession, second: ISession) {
        return second.voters.length - first.voters.length;
    }

    public toggleVote(session: ISession) {
        if (this.userHasVoted(session))
            this.voterService.deleteVoter(session, this.authService.currentUser.userName, this.eventId);
        else
            this.voterService.addVoter(session,
                this.authService.currentUser.userName, this.eventId);
        if (this.sortBy === 'votes')
            this.visibleSessions.sort(this.sortByVotesDesc);
    }

    public userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}
