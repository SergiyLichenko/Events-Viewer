import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ToastrService } from "../../common/toastr.service";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: 'app/events/events-list/events-list.component.html',
  providers: [ToastrService, EventService]
})

export class EventListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService,
    private _toastrService: ToastrService) {

  }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this._toastrService.info(eventName);
  }
}