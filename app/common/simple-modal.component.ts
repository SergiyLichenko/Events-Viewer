import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './index';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styleUrls: ['app/common/simple-modal.component.css'],
})
export class SimpleModalComponent {
    @Input() public title: string;
    @Input() public elementId: string;
    @Input() public closeOnBodyClick: string;
    @ViewChild('modalContainer') public modalContainer: ElementRef;
    constructor( @Inject(JQ_TOKEN) private $: any) {

    }
    public closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true')
            this.$(this.modalContainer.nativeElement).modal('hide');
    }
}
