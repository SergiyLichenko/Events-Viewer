import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

import { EventService } from "./events/shared/event.service";
import { appRoutes } from "./router";

@NgModule({
    providers: [EventService],
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        EventListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}