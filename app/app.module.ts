import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { 
    EventService, 
    EventDetailsGuard, 
    EventsListResolveService, 
    EventListComponent,
    CreateEventComponent, 
    EventThumbnailComponent, 
    EventDetailsComponent} from "./events/index"

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

import { appRoutes } from "./router";
import { ToastrService } from "./common/toastr.service";


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