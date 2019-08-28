import { Directive, Input, OnInit, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';

export interface IntersectionEvent {
  intersecting: boolean;
  intersection?: IntersectionObserverEntry,
  details: IntersectionObserverEntry[]
}

@Directive({
  selector: '[ngx-intersection]'
})
export class IntersectionDirective implements OnInit, OnDestroy {

  /**
   * Element to intersect with target, default to viewport
   */
  @Input() root: Element;

  /**
   * Margin around the root element to shrink the intersection frame
   * Use this as a css string eg. 10px 10px 10px 10px top right bottom left
   */
  @Input() margin: string;

  /**
   * Visibility threshold (0 to 1) at which the intersection event will be emitted.
   * Defaults to zero meaning that the event will emit when just one pixel
   * of target intersects with the root element.
   * Can also be an array of numbers causing multiple emissions for each of
   * thresholds listed
   */
  @Input() threshold: number | number[];

  @Output() intersection: EventEmitter<IntersectionEvent> = new EventEmitter<IntersectionEvent>();
  @Output() showing: EventEmitter<IntersectionEvent> = new EventEmitter<IntersectionEvent>();
  @Output() hiding: EventEmitter<IntersectionEvent> = new EventEmitter<IntersectionEvent>();


  private observer: IntersectionObserver;

  constructor(
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      const event: IntersectionEvent  = {
        intersecting: entries && entries.length > 0 ? entries[0].isIntersecting : false,
        intersection: entries && entries.length > 0 ? entries[0] : null,
        details: entries
      }
      this.intersection.emit(event);
      if (event.intersecting) {
        this.showing.emit(event);
      } else {
        this.hiding.emit(event);
      }
    }, {
      root: this.root,
      rootMargin: this.margin,
      threshold: this.threshold
    });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.element.nativeElement);
  }

}
