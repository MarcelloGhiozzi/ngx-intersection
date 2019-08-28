import { IntersectionDirective } from './ngx-intersection.directive';
import { ElementRef } from '@angular/core';

describe('IntersectionDirective', () => {
  it('should create an instance', () => {
    const directive = new IntersectionDirective(new ElementRef(0));
    expect(directive).toBeTruthy();
  });
});
