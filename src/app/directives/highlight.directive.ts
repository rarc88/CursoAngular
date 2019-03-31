import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
    constructor(private elemRef: ElementRef, private renderer: Renderer2) {

    }
    @Input('highlight') level:number;
    ngOnInit() {
        if(this.level === 2) {
            //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elemRef.nativeElement, 'font-weight', 'bold');
        }
    }
}