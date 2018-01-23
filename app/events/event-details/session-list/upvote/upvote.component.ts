import { Component, Input, Output, EventEmitter } from "@angular/core";
import { } from "@angular/core/src/event_emitter";


@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/session-list/upvote/upvote.component.html',
    styleUrls: ['app/events/event-details/session-list/upvote/upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }

    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}