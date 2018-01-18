import { Component,Input } from "@angular/core";


@Component({
    selector: "collapsible-well",
    templateUrl: "app/common/collapsible-well/collapsible-well.component.html"
})
export class CollapsibleWellComponent{
    visible: boolean;

    toggleContent(){
        this.visible = !this.visible;
    }
}