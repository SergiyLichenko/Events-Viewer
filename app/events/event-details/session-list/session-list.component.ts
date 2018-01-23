import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../../index";


@Component({
    selector: "session-list",
    templateUrl: "app/events/event-details/session-list/session-list.component.html",
    styleUrls: ["app/events/event-details/session-list/session-list.component.css"]
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

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
}