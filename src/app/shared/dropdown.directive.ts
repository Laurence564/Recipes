import {Directive, ElementRef, Host, HostBinding, HostListener, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  //constructor(private elRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  //Optional listener which can close the dropdown when clicking anywhere on the page
  // @HostListener('document:click', ['$event']) toggleOpenAndCloseFromAnywhere(event: Event) {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  // }

}
