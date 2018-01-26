import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
    moduleId: module.id,
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
    public isDirty: boolean = true;
    event:any = { location: { } }
    
    constructor(private router: Router,
                private eventService: EventService) { }

    public cancelClick(): void {
        this.router.navigate(['/events']);
    }

    public saveEvent(createForm) {
        this.eventService.saveEvent(createForm).subscribe((event) => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }
}
