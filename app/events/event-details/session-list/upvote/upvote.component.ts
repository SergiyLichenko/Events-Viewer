import { Component, EventEmitter, Input, Output } from '@angular/core';
import { } from '@angular/core/src/event_emitter';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/session-list/upvote/upvote.component.html',
    styleUrls: ['app/events/event-details/session-list/upvote/upvote.component.css'],
})
export class UpvoteComponent {
    @Input() public count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }

    @Output() public vote = new EventEmitter();
    public iconColor: string;

    public onClick() {
        this.vote.emit({});
    }
}
