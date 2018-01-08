import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from "./errors/404.component";

import { appRoutes } from "./router";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsGuard } from "./events/event-details/event-details-guard.service";
import { EventsListResolveService } from "./events/events-list/events-list-resolve.service";


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    providers: [
        EventDetailsGuard,
        EventService,
        EventsListResolveService,
        ToastrService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }],
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        CreateEventComponent,
        EventDetailsComponent,
        Error404Component,
        EventListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm("You have not saved this event, do you really want to cancel?");

    return true;
}