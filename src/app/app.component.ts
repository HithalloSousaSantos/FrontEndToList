import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }
  title = 'FrontEndToList';
}
