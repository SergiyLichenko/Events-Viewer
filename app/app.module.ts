import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    EventService,
    EventDetailsGuard,
    EventsListResolveService,
    EventListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    DurationPipe
} from "./events/index";

import {
    TOASTR_TOKEN,
    IToastr,
    JQ_TOKEN,
    SimpleModalComponent
} from "./common/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

import { appRoutes } from "./router";

import { AuthService } from "./user/shared/auth.service";
import { SessionListComponent } from "./events/event-details/session-list/session-list.component";
import { CollapsibleWellComponent } from "./common/collapsible-well/collapsible-well.component";

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)],
    providers: [
        EventDetailsGuard,
        EventService,
        AuthService,
        EventsListResolveService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }],
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        CreateSessionComponent,
        CreateEventComponent,
        EventDetailsComponent,
        SessionListComponent,
        Error404Component,
        EventListComponent,
        DurationPipe],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("You have not saved this event, do you really want to cancel?");

    return true;
}