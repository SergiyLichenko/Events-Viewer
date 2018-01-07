import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "app/events/create-event/create-event.component.html"
})
export class CreateEventComponent{
    constructor(private _router: Router){}

    cancelClick():void{
        this._router.navigate(["/events"]);
    }
}