import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail/event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
    @Input() public event: IEvent; 
}
