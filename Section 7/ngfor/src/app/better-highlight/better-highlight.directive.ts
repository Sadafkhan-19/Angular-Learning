import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'green';
@HostBinding('style.backgroundColor') backgroundColor: string =this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor =this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = this.defaultColor;
  }
}
