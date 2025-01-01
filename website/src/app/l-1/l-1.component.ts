import { Component, ViewEncapsulation } from '@angular/core';
import { C1L1Component } from "../c1-l1/c1-l1.component";
import { C2L1Component } from "../c2-l1/c2-l1.component";
import { C3L1Component } from "../c3-l1/c3-l1.component";

@Component({
  selector: 't-l-1',
  imports: [C1L1Component, C2L1Component, C3L1Component],
  templateUrl: './l-1.component.html',
  styleUrl: './l-1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class L1Component {

}
