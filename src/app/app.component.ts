import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'virtual-met';

  currentPath = '';

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }
}
