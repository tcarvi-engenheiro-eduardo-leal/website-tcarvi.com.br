import { Component, ViewEncapsulation } from '@angular/core';
import { ConteudoL11Component } from "../conteudo-l1-1/conteudo-l1-1.component";

@Component({
  selector: 't-layout-1',
  imports: [ConteudoL11Component],
  templateUrl: './layout-1.component.html',
  styleUrl: './layout-1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Layout1Component {

}
