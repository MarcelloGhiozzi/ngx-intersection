import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from './ngx-intersection.directive';

@NgModule({
  declarations: [IntersectionDirective],
  imports: [
    CommonModule
  ],
  exports: [IntersectionDirective]
})
export class NgxIntersectionModule { }
