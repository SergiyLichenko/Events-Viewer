import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component({
  templateUrl: './events-list.component.html',
})

export class EventListComponent implements OnInit {
  public events: IEvent[];

  constructor(private activateRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.events = this.activateRoute.snapshot.data['events'];
  }

}
