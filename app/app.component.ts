import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {
  title = 'Angular';
}
