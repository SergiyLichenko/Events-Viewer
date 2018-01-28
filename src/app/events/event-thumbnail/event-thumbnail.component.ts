import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../index';
import { Router } from '@angular/router';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
    @Input() public event: IEvent;
    @Output() onNavigate = new EventEmitter();

    constructor(private router: Router) { }

    onNavigateClick() {
        this.onNavigate.emit(null);
        this.router.navigate(['/events', {outlets :{details: [this.event.id]}}]);
    }
}
