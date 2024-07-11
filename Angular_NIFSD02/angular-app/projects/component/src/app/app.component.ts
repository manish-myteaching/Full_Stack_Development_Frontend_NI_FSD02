import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
export class AppComponent {
  title = 'component';
}