import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './index';

@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') public modalId: string;

    constructor( @Inject(JQ_TOKEN) private $: any,
                 private element: ElementRef) {
        this.el = element.nativeElement;
    }

    public ngOnInit(): void {
        this.el.addEventListener('click', (e) => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
