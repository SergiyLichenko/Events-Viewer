import {
    EventListComponent,
    EventsListResolveService,
    EventDetailsGuard,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent
} from "./events/index"

import { Routes } from "@angular/router"
import { Error404Component } from "./errors/404.component";

export const appRoutes  : Routes = [
    {path: 'events', component: EventListComponent, resolve:{events: EventsListResolveService}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsGuard]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full'}    
]