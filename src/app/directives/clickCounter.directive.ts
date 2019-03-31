import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[clickCounter]'
})

export class ClickCounterDirective {
    clickCounter:number = 0;
    @HostBinding('style.opacity', ) opacity:number = .1;
    @HostListener('click', ['$event.target']) onClick(buttom:any) {
        this.opacity += .1;
        console.log('a', buttom, `Contador: ${++this.clickCounter}`);
    }
}