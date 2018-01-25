import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import './rxjs-extensions';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventListComponent,
    EventResolver,
    EventService,
    EventsListResolveService,
    EventThumbnailComponent,
    LocationValidator,
    UpvoteComponent,
    VoterService,
} from './events/index';

import {
    IToastr,
    JQ_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    TOASTR_TOKEN,
} from './common/index';

import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { NavBarComponent } from './nav/navbar.component';

import { appRoutes } from './router';

import { AuthService } from './user/shared/auth.service';

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        ModalTriggerDirective,
        LocationValidator,
        UpvoteComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        CreateSessionComponent,
        CreateEventComponent,
        EventDetailsComponent,
        SessionListComponent,
        Error404Component,
        EventListComponent,
        DurationPipe],

    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)],
    providers: [
        EventService,
        EventResolver,
        AuthService,
        VoterService,
        EventsListResolveService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery,
        },
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        }],

    bootstrap: [EventsAppComponent],
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}
