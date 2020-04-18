import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Input()
  public excludeClasses: string[] = [];

  @Output()
  public clickOutside: EventEmitter<void> = new EventEmitter();

  constructor(private readonly elementRef: ElementRef) { }

  @HostListener('document:click', [ '$event.target' ])
  public onClick(targetElement: any): void {
    const isExclude = this.excludeClasses.filter((exclude: string) => targetElement.classList.contains(exclude)).length > 0;
    const clickedInside = isExclude || this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

}
