import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";

import { EventService } from "./events/shared/event.service";
import { appRoutes } from "./router";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        CreateEventComponent,
        EventDetailsComponent,
        EventListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}