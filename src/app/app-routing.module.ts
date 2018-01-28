import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    EventListComponent,
    EventsListResolveService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    CreateSessionComponent,
    SessionDetailsComponent,
    SessionDetailsResolverService
} from './events/index';
import { Error404Component } from './errors/404.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { SessionListResolverService } from './events/event-details/session-list/session-list-resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent, resolve: { events: EventsListResolveService } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {
        path: 'events/:eventId', component: EventDetailsComponent, resolve: { event: EventResolver },
        children: [
            { path: '', pathMatch: 'full', component: SessionListComponent, resolve: { sessions: SessionListResolverService } },
            { path: 'sessions/new', component: CreateSessionComponent },
            { path: 'sessions/:sessionId', component: SessionDetailsComponent, resolve: { session: SessionDetailsResolverService } }
        ]
    },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'error', component: Error404Component },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}