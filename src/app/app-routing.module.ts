import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    EventListComponent,
    EventsListResolveService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';

const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventsListResolveService } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {
}