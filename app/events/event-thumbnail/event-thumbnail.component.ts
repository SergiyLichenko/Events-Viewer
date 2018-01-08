import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "../index";


@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail/event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: IEvent; 
}