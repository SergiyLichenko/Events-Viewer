import { Component } from '@angular/core'
import { EventListComponent } from './events/events-list.component';

@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
    `
})
export class EventsAppComponent{

}