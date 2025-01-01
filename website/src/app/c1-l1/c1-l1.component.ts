import { Component, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 't-c1-l1',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule],
  templateUrl: './c1-l1.component.html',
  styleUrl: './c1-l1.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class C1L1Component {
}
