import { Routes } from "@angular/router"
import { EventListComponent } from "./events/events-list/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventDetailsGuard } from "./events/event-details/event-details-guard.service";
import { EventsListResolveService } from "./events/events-list/events-list-resolve.service";

export const appRoutes  : Routes = [
    {path: 'events', component: EventListComponent, resolve:{events: EventsListResolveService}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsGuard]},
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full'}    
]