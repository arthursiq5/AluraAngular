import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive({
  selector: "[apDarkenOnHover]"
})
export class DarkenOnHoverDirective{

  constructor(
    private element: ElementRef,
    private render: Renderer
  ){ }

  @HostListener('mouseover')
  darkenOn(){
    this.render.setElementStyle(
      this.element.nativeElement, 'filter', 'brightness(70%)')
  }

  @HostListener('mouseleave')
  darkenOut(){
    this.render.setElementStyle(
      this.element.nativeElement, 'filter', 'brightness(100%)')
  }
}
