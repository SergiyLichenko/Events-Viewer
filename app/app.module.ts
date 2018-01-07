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
import { EventRouteActivatorGuard } from "./events/event-details/event-route-activator.service";
import { ToastrService } from "./common/toastr.service";


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    providers: [EventRouteActivatorGuard, EventService, ToastrService],
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