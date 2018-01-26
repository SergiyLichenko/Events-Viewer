import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
    @Input() public event: IEvent; 
}
