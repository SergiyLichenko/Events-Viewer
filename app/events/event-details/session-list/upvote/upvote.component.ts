import { Component, Input, Output, EventEmitter } from "@angular/core";
import { } from "@angular/core/src/event_emitter";


@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/session-list/upvote/upvote.component.html',
    styleUrls: ['app/events/event-details/session-list/upvote/upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}