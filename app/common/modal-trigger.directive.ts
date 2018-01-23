import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./index";


@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor( @Inject(JQ_TOKEN) private $: any,
        private element: ElementRef) {
        this.el = element.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        })
    }
}