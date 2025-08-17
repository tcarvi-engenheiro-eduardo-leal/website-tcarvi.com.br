import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 't-c3-l1',
  standalone: true,
  imports: [MatCardModule, MarkdownComponent],
  templateUrl: './c3-l1.component.html',
  styleUrl: './c3-l1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class C3L1Component {

}
