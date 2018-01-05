import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, 
        EventThumbnailComponent,
        NavBarComponent,
        EventListComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}