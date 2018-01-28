import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
    public event: IEvent;
    public tabNumber = '0';

    constructor(private activatedRoute: ActivatedRoute) { }

    public ngOnInit() {
        this.activatedRoute.data.forEach((data) => {
            this.event = data['event'];
        });
    }
}
