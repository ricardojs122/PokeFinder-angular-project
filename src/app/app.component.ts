import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<h1 class="title">PokeFinder</h1>
  <router-outlet></router-outlet>
  <app-card></app-card>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'c10';
}
