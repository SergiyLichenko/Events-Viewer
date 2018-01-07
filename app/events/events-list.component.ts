import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
import { OnInit } from "@angular/core";

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})

export class EventListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService) {

  }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }
}