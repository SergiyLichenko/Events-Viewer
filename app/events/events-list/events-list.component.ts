import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ToastrService } from "../../common/toastr.service";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../index";

@Component({
  templateUrl: 'app/events/events-list/events-list.component.html'
})

export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private _eventService: EventService,
    private _toastrService: ToastrService,
    private _activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this._activateRoute.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this._toastrService.info(eventName);
  }
}