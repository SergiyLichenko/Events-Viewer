import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./index";


@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styleUrls: ['app/common/simple-modal.component.css']
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalContainer') modalContainer: ElementRef;
    constructor( @Inject(JQ_TOKEN) private $: any) {

    }
    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true')
            this.$(this.modalContainer.nativeElement).modal('hide');
    }
}