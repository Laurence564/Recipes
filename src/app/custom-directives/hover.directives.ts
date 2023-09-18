import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({ selector: '[appHoverHighlight]' })
export class HoverDirectives implements OnInit{

  @Input() defaultColour:string = 'transparent';
  @Input() highlightColour: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColour:string;

  constructor(private elfRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData:Event) {
    this.backgroundColour = this.highlightColour;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColour = this.defaultColour;
  }

  ngOnInit(): void {
    this.backgroundColour = this.defaultColour;
  }
}
