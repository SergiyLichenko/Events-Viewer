import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../../index";
import { VoterService } from "./upvote/voter.service";
import { AuthService } from "../../../user/shared/auth.service";


@Component({
    selector: "session-list",
    templateUrl: "app/events/event-details/session-list/session-list.component.html",
    styleUrls: ["app/events/event-details/session-list/session-list.component.css"]
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(private voterService: VoterService,
        private authService: AuthService) {
    }

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) :
                this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    filterSessions(filter: string): any {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

    sortByNameAsc(first: ISession, second: ISession) {
        if (first.name > second.name) return 1;
        if (first.name === second.name) return 0;
        return -1;
    }

    sortByVotesDesc(first: ISession, second: ISession) {
        return second.voters.length - first.voters.length;
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session))
            this.voterService.deleteVoter(session, this.authService.currentUser.userName, this.eventId);
        else
            this.voterService.addVoter(session,
                this.authService.currentUser.userName, this.eventId);
        if (this.sortBy === 'votes')
            this.visibleSessions.sort(this.sortByVotesDesc);
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}