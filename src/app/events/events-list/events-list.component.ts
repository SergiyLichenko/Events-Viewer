import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, ResolveEnd, ActivationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { IEvent } from '../index';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventListComponent implements OnInit {
  public events: IEvent[];
  public loading: boolean = false;
  private navigatedByThumbnail: boolean = false;
  
  constructor(private activateRoute: ActivatedRoute,
    private router: Router) {
    router.events.subscribe(this.handleRouterEvent.bind(this));
  }

  public ngOnInit() {
    this.events = this.activateRoute.snapshot.data['events'];
  }

  private handleRouterEvent(event: Event) {

    if (event instanceof NavigationStart && !this.navigatedByThumbnail)
      this.loading = true;
    if (event instanceof ResolveEnd ||
      event instanceof ActivationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError) {
      this.loading = false;
      this.navigatedByThumbnail = false;
    }
  }

  onNavigate(data) {
    this.navigatedByThumbnail = true;
  }
}
