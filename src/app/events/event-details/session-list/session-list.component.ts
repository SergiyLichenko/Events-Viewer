import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../../user/shared/auth.service';
import { ISession } from '../../index';
import { VoterService } from './upvote/voter.service';
import { SimpleChanges } from '@angular/core';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() public sessions: ISession[];
    @Input() public filterBy: string;
    @Input() public sortBy: string;
    @Input() public eventId: number;
    public visibleSessions: ISession[] = [];

    constructor(private voterService: VoterService,
                private authService: AuthService) {
    }

    public ngOnChanges(changes: SimpleChanges): void {
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
