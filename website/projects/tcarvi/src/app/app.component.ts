import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 't-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  markdownText = '## Empreendimento TCARVI';
}
