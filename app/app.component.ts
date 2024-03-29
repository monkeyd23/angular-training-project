import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentComponent = 'builds';

  navigate(component: string) {
      this.currentComponent = component;
  }
}
