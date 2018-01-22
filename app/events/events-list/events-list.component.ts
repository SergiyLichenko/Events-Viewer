import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ToastrService } from "../../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../index";

@Component({
  templateUrl: 'app/events/events-list/events-list.component.html'
})

export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private toastrService: ToastrService,
    private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.activateRoute.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.info(eventName);
  }
}