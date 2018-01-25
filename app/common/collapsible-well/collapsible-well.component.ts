import { Component,Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html',
})
export class CollapsibleWellComponent {
    public visible: boolean;

    public toggleContent() {
        this.visible = !this.visible;
    }
}
