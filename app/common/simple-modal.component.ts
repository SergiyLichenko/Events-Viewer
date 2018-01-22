import { Component, Input } from "@angular/core";


@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styleUrls: ['app/common/simple-modal.component.css']
})
export class SimpleModalComponent {
    @Input() title: string;
}