import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IEvent } from '../../shared/event.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './event-details-popup.component.html',
    styleUrls: ['./event-details-popup.component.css']
})
export class EventDetailsPopupComponent implements OnInit {
    public event: IEvent;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router) {

    }

    public ngOnInit() {
        this.activatedRoute.data.forEach((data) => {
            this.event = data['event'];
        });
    }

    onClose() {
        this.router.navigate(['/events', { outlets: { details: null } }]);
    }
}